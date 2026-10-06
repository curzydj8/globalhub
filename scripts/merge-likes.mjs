// 用法：node scripts/merge-likes.mjs
// 读取 data/likes-pending/*.json（数组 of id），累加进 sites.json.likes
import fs from 'fs';

const dir = 'data/likes-pending';
if (!fs.existsSync(dir)) {
  console.log('no pending likes');
  process.exit(0);
}
const sites = JSON.parse(fs.readFileSync('data/sites.json', 'utf-8'));
const map = new Map(sites.map((s) => [s.id, s]));
let n = 0;
for (const f of fs.readdirSync(dir)) {
  if (!f.endsWith('.json')) continue;
  try {
    const arr = JSON.parse(fs.readFileSync(`${dir}/${f}`, 'utf-8'));
    for (const id of arr) {
      if (map.has(id)) {
        map.get(id).likes++;
        n++;
      }
    }
  } catch (e) {
    console.log(`skip ${f}: ${e.message}`);
    continue;
  }
  fs.unlinkSync(`${dir}/${f}`);
}
fs.writeFileSync('data/sites.json', JSON.stringify(sites, null, 2));
console.log(`merged ${n} likes`);
