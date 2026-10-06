#!/usr/bin/env python3
"""Deploy a static dir to gh-pages branch via Git Database API (fast bulk upload)."""
import sys, os, json, base64
from concurrent.futures import ThreadPoolExecutor
sys.path.insert(0, "/opt/hatch/skills/skill-creator/bin")
from dynamic_credentials import add_surrogate_to_request, read_json_response
import urllib.request, urllib.error

API = "https://api.github.com"
CRED = "custom.github"

def req(method, path, body=None):
    data = json.dumps(body).encode() if body is not None else None
    r = urllib.request.Request(API + path, data=data, method=method)
    r.add_header("Accept", "application/vnd.github+json")
    r.add_header("User-Agent", "muse-ghpages")
    add_surrogate_to_request(r, CRED, allowed_hosts=["api.github.com"])
    try:
        with urllib.request.urlopen(r, timeout=120) as resp:
            return resp.status, read_json_response(resp)
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode()[:300]

def main():
    repo = sys.argv[1]          # e.g. curzydj8/globalhub
    local_dir = sys.argv[2]     # e.g. /home/hatch/workspace/globalhub/out
    branch = sys.argv[3] if len(sys.argv) > 3 else "gh-pages"

    files = []
    for root, dirs, names in os.walk(local_dir):
        for n in sorted(names):
            full = os.path.join(root, n)
            rel = os.path.relpath(full, local_dir)
            files.append((full, rel.replace(os.sep, "/")))
    print(f"files: {len(files)}")

    import time, urllib.error, http.client

    # 断点续传：已创建的 blob SHA 存文件
    resume_file = "/tmp/ghpages_blobs.json"
    done = {}
    if os.path.exists(resume_file):
        done = json.load(open(resume_file))

    def api_post_blob(content):
        data = json.dumps({"content": content, "encoding": "base64"}).encode()
        r = urllib.request.Request(f"{API}/repos/{repo}/git/blobs", data=data, method="POST")
        r.add_header("Accept", "application/vnd.github+json")
        r.add_header("User-Agent", "muse-ghpages")
        add_surrogate_to_request(r, CRED, allowed_hosts=["api.github.com"])
        with urllib.request.urlopen(r, timeout=30) as resp:
            return read_json_response(resp)["sha"]

    def make_blob(item):
        full, rel = item
        if rel in done:
            return {"path": rel, "mode": "100644", "type": "blob", "sha": done[rel]}
        with open(full, "rb") as fh:
            content = base64.b64encode(fh.read()).decode()
        last = None
        for attempt in range(6):
            try:
                sha = api_post_blob(content)
                done[rel] = sha
                if len(done) % 50 == 0:
                    json.dump(done, open(resume_file, "w"))
                return {"path": rel, "mode": "100644", "type": "blob", "sha": sha}
            except Exception as e:
                last = f"{type(e).__name__}: {str(e)[:80]}"
            time.sleep(2 * (attempt + 1))
        raise RuntimeError(f"blob failed {rel}: {last}")

    tree_items = [None] * len(files)
    done_count = [0]
    import threading
    lock = threading.Lock()
    def worker(idx_item):
        idx, item = idx_item
        tree_items[idx] = make_blob(item)
        with lock:
            done_count[0] += 1
            if done_count[0] % 100 == 0:
                print(f"  ...{done_count[0]}/{len(files)} blobs", flush=True)
    with ThreadPoolExecutor(max_workers=4) as ex:
        list(ex.map(worker, enumerate(files)))
    json.dump(done, open(resume_file, "w"))
    print(f"blobs created: {len(tree_items)}", flush=True)

    # 分块增量建树（单次 tree 太大 GitHub 会 422 超时）
    CHUNK = 150
    base = None
    for i in range(0, len(tree_items), CHUNK):
        chunk = tree_items[i:i + CHUNK]
        body = {"tree": chunk}
        if base:
            body["base_tree"] = base
        for attempt in range(5):
            s, tree = req("POST", f"/repos/{repo}/git/trees", body)
            if s == 201:
                break
            import time as _t; _t.sleep(3 * (attempt + 1))
        assert s == 201, f"tree failed: {s} {tree}"
        base = tree["sha"]
        print(f"  tree chunk {i // CHUNK + 1}: {base[:8]}", flush=True)
    tree_sha = base
    print("tree:", tree_sha[:8], flush=True)

    # base commit: existing branch head or empty
    s, ref = req("GET", f"/repos/{repo}/git/ref/heads/{branch}")
    parents = [ref["object"]["sha"]] if s == 200 else []
    s, commit = req("POST", f"/repos/{repo}/git/commits",
                    {"message": "deploy site", "tree": tree_sha, "parents": parents})
    assert s == 201, f"commit failed: {s} {commit}"
    print("commit:", commit["sha"][:8])

    body = {"sha": commit["sha"], "force": True}
    if parents:
        s, out = req("PATCH", f"/repos/{repo}/git/refs/heads/{branch}", body)
    else:
        s, out = req("POST", f"/repos/{repo}/git/refs", {"ref": f"refs/heads/{branch}", **body})
    assert s in (200, 201), f"ref update failed: {s} {out}"
    print(f"branch {branch} updated")

    # enable Pages from branch
    s, out = req("POST", f"/repos/{repo}/pages",
                 {"source": {"branch": branch, "path": "/"}})
    print("pages enable:", s, str(out)[:120])

if __name__ == "__main__":
    main()
