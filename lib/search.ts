import type { Site } from './data';

/** 简单的站内全文搜索：名称 / 简介 / 标签 / 国家 */
export function searchSites(sites: Site[], q: string, category?: string): Site[] {
  const query = q.trim().toLowerCase();
  if (!query) return [];
  const terms = query.split(/\s+/);
  return sites
    .filter((s) => !category || s.category === category)
    .map((s) => {
      const hay = `${s.name} ${s.description} ${s.tags.join(' ')} ${s.country}`.toLowerCase();
      let matched = 0;
      for (const t of terms) if (hay.includes(t)) matched++;
      return { s, matched };
    })
    .filter((x) => x.matched > 0)
    .sort((a, b) => b.matched - a.matched || b.s.views + b.s.likes * 50 - (a.s.views + a.s.likes * 50))
    .map((x) => x.s);
}
