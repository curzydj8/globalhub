#!/usr/bin/env python3
"""核实一批候选站点的 URL 是否可达，通过的才入库。
用法: python3 tools/verify_and_merge.py tools/seed_batchA.py BATCHA
- 用 curl HEAD 跟随跳转检测，接受 2xx/3xx/403/429（存在但反爬）
- 拒绝: 404/5xx/DNS失败/超时/连接拒绝（重试1次后仍失败则剔除）
- 通过的站点追加进 data/sites.json（浏览量/点赞按 id 哈希确定性生成）
"""
import sys, json, hashlib, subprocess

BATCH_FILE, BATCH_VAR = sys.argv[1], sys.argv[2]
sys.path.insert(0, "tools")
mod = __import__(BATCH_FILE.split("/")[-1].replace(".py", ""))
batch = getattr(mod, BATCH_VAR)
print(f"候选: {len(batch)}")

def check(url):
    for _ in range(2):
        try:
            r = subprocess.run(
                ["curl", "-sIL", "-o", "/dev/null", "-w", "%{http_code}",
                 "--max-time", "15", "-A", "Mozilla/5.0 (compatible; GlobalHub/1.0)", url],
                capture_output=True, text=True, timeout=25)
            code = r.stdout.strip().split("\n")[-1]
            if code and code[0] in "23":
                return True, code
            if code in ("403", "429", "401"):
                return True, code + "(反爬但存在)"
            last = code
        except Exception as e:
            last = f"ERR {type(e).__name__}"
    return False, last

cats = {c["slug"] for c in json.load(open("data/categories.json", encoding="utf-8"))}
sites = json.load(open("data/sites.json", encoding="utf-8"))
existing = {s["id"] for s in sites}

ok_list, bad_list = [], []
for sid, name, url, desc, cat, tags, country, lang, *rest in batch:
    feat = rest[0] if rest else False
    if sid in existing:
        print(f"  跳过重复 id: {sid}"); continue
    if cat not in cats:
        print(f"  跳过错误分类: {sid} -> {cat}"); bad_list.append((sid, url, "badcat")); continue
    good, info = check(url)
    if good:
        h = int(hashlib.md5(sid.encode()).hexdigest()[:8], 16)
        views = 5000 + (h % 795000); likes = 50 + ((h >> 8) % 8950)
        if feat: views, likes = int(views * 2.5), int(likes * 3)
        ok_list.append({"id": sid, "name": name, "logo": "", "url": url,
                        "description": desc, "category": cat, "tags": tags,
                        "country": country, "language": lang, "views": views,
                        "likes": likes, "updated": "2026-10-06",
                        **({"featured": True} if feat else {})})
        print(f"  OK {info}: {sid}")
    else:
        bad_list.append((sid, url, info))
        print(f"  FAIL {info}: {sid} {url}")

sites.extend(ok_list)
json.dump(sites, open("data/sites.json", "w", encoding="utf-8"), ensure_ascii=False, indent=2)
print(f"\n入库 {len(ok_list)}，剔除 {len(bad_list)}，当前总数 {len(sites)}")
if bad_list:
    print("剔除列表:")
    for sid, url, info in bad_list:
        print(f"  - {sid} {url} ({info})")
