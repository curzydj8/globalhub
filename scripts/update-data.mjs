// 用法：node scripts/update-data.mjs
// 输入 data/sites.json → 输出 data/ranking.json data/tags.json
// public/sitemap.xml public/rss.xml public/search-index.json
import fs from 'fs';

const LIKE_WEIGHT = 50;
const BASE = 'https://curzydj8.github.io/globalhub';
const today = new Date();

const sites = JSON.parse(fs.readFileSync('data/sites.json', 'utf-8'));
const cats = JSON.parse(fs.readFileSync('data/categories.json', 'utf-8'));

const score = (s) => s.views + s.likes * LIKE_WEIGHT;
const trendingScore = (s) => {
  const age = Math.max(0, (today - new Date(s.updated + 'T00:00:00')) / 86400000);
  return score(s) / Math.pow(age + 2, 1.4);
};

const ranking = {
  updated: today.toISOString(),
  global: [...sites].sort((a, b) => score(b) - score(a)).slice(0, 500).map((s) => s.id),
  byCategory: {},
  byLikes: [...sites].sort((a, b) => b.likes - a.likes).slice(0, 100).map((s) => s.id),
  trending: [...sites].sort((a, b) => trendingScore(b) - trendingScore(a)).slice(0, 50).map((s) => s.id),
  newest: [...sites].sort((a, b) => b.updated.localeCompare(a.updated)).slice(0, 50).map((s) => s.id),
};
for (const c of cats) {
  ranking.byCategory[c.slug] = sites
    .filter((s) => s.category === c.slug)
    .sort((a, b) => score(b) - score(a))
    .slice(0, 100)
    .map((s) => s.id);
}
fs.writeFileSync('data/ranking.json', JSON.stringify(ranking, null, 2));

// tags.json
const tags = {};
for (const s of sites) for (const t of s.tags || []) (tags[t] ??= []).push(s.id);
fs.writeFileSync('data/tags.json', JSON.stringify(tags, null, 2));

// search-index.json（轻量，供搜索页/点赞页客户端使用）
const index = sites.map((s) => ({
  id: s.id, name: s.name, description: s.description, tags: s.tags,
  category: s.category, country: s.country, url: s.url,
  views: s.views, likes: s.likes, language: s.language,
  logo: s.logo, updated: s.updated,
}));
fs.writeFileSync('public/search-index.json', JSON.stringify(index));

// sitemap.xml
const urls = [
  { loc: `${BASE}/`, changefreq: 'daily', priority: '1.0' },
  { loc: `${BASE}/ranking/`, changefreq: 'daily', priority: '0.9' },
  { loc: `${BASE}/tags/`, changefreq: 'weekly', priority: '0.6' },
  ...cats.map((c) => ({ loc: `${BASE}/category/${c.slug}/`, changefreq: 'weekly', priority: '0.8' })),
  ...sites.map((s) => ({ loc: `${BASE}/site/${s.id}/`, changefreq: 'weekly', priority: '0.7', lastmod: s.updated })),
];
const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map((u) => `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}<changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`).join('\n') +
  `\n</urlset>`;
fs.writeFileSync('public/sitemap.xml', xml);

// rss.xml（newest 前 30）
const byId = new Map(sites.map((s) => [s.id, s]));
const items = ranking.newest.slice(0, 30).map((id) => byId.get(id)).filter(Boolean);
const rss =
  `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel>\n<title>GlobalHub 新增资源</title><link>${BASE}/</link><description>每日更新的互联网资源</description>\n` +
  items.map((s) => `<item><title><![CDATA[${s.name}]]></title><link>${BASE}/site/${s.id}/</link><description><![CDATA[${s.description}]]></description><pubDate>${new Date(s.updated + 'T00:00:00').toUTCString()}</pubDate></item>`).join('\n') +
  `\n</channel></rss>`;
fs.writeFileSync('public/rss.xml', rss);

console.log(`done: ${sites.length} sites, ${cats.length} categories, ${Object.keys(tags).length} tags`);
