import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Site {
  id: string;
  name: string;
  logo: string;
  url: string;
  description: string;
  category: string;
  tags: string[];
  country: string;
  language: string;
  views: number;
  likes: number;
  updated: string;
  featured?: boolean;
}

export interface Category {
  slug: string;
  name: string;
  en: string;
  icon: string;
  description: string;
  subcategories: string[];
}

const dataDir = path.join(process.cwd(), 'data');
const read = (f: string) => JSON.parse(fs.readFileSync(path.join(dataDir, f), 'utf-8'));

export function getSites(): Site[] {
  return read('sites.json');
}
export function getCategories(): Category[] {
  return read('categories.json');
}
export function getRanking(): {
  updated: string;
  global: string[];
  byCategory: Record<string, string[]>;
  byLikes: string[];
  trending: string[];
  newest: string[];
} {
  return read('ranking.json');
}
export function getTags(): Record<string, string[]> {
  return read('tags.json');
}
export function getSite(id: string): Site | undefined {
  return getSites().find((s) => s.id === id);
}
export function getSitesByIds(ids: string[]): Site[] {
  const map = new Map(getSites().map((s) => [s.id, s]));
  return ids.map((id) => map.get(id)).filter(Boolean) as Site[];
}
export function getCategory(slug: string): Category | undefined {
  return getCategories().find((c) => c.slug === slug);
}
/** Markdown 百科正文（无则返回 null） */
export function getSiteDoc(id: string): { front: Record<string, any>; content: string } | null {
  const p = path.join(process.cwd(), 'content', 'sites', `${id}.md`);
  if (!fs.existsSync(p)) return null;
  const { data, content } = matter(fs.readFileSync(p, 'utf-8'));
  return { front: data, content };
}
