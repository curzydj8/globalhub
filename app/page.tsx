import Link from 'next/link';
import { getSitesByIds, getRanking, getCategories, getSites } from '@/lib/data';
import SiteCard from '@/components/SiteCard';
import HeroSearch from '@/components/HeroSearch';
import SectionTitle from '@/components/SectionTitle';

export const metadata = {
  title: 'GlobalHub - 全球互联网资源百科导航',
  description: '数万站点收录：AI、开源、工具、开发、设计……可搜索、可排行、可点赞的互联网资源百科。',
};

function pick(ids: string[] | undefined, n: number) {
  return getSitesByIds((ids || []).slice(0, n));
}

export default function HomePage() {
  const ranking = getRanking();
  const categories = getCategories();
  const trending = pick(ranking.trending, 12);
  const newest = pick(ranking.newest, 8);
  const topGlobal = pick(ranking.global, 10);
  const topLikes = pick(ranking.byLikes, 10);
  const featured = getSites().filter((s) => s.featured).slice(0, 8);
  const aiSites = pick(ranking.byCategory['ai'], 8);
  const osSites = pick(ranking.byCategory['opensource'], 8);
  const softSites = pick(
    [...(ranking.byCategory['download'] || []), ...(ranking.byCategory['os'] || []), ...(ranking.byCategory['browser'] || [])].slice(0, 8), 8);
  const toolSites = pick(
    [...(ranking.byCategory['nettools'] || []), ...(ranking.byCategory['utils'] || []), ...(ranking.byCategory['webmaster'] || [])].slice(0, 8), 8);

  return (
    <main>
      <section className="bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-950 py-16 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          GlobalHub <span className="text-indigo-600 dark:text-indigo-400">🌐</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">全球互联网资源百科 — 发现、收藏、排行</p>
        <HeroSearch categories={categories} />
      </section>

      <div className="max-w-7xl mx-auto px-4 pb-4">
        <SectionTitle title="🔥 今日热门" href="/ranking" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {trending.map((s) => <SiteCard key={s.id} site={s} />)}
        </div>

        <SectionTitle title="✨ 新增资源" href="/ranking" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {newest.map((s) => <SiteCard key={s.id} site={s} />)}
        </div>

        {featured.length > 0 && (<>
          <SectionTitle title="⭐ 推荐网站" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featured.map((s) => <SiteCard key={s.id} site={s} />)}
          </div>
        </>)}

        <SectionTitle title="🤖 AI专区" href="/category/ai" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {aiSites.map((s) => <SiteCard key={s.id} site={s} />)}
        </div>

        <SectionTitle title="💻 开源专区" href="/category/opensource" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {osSites.map((s) => <SiteCard key={s.id} site={s} />)}
        </div>

        <SectionTitle title="📦 软件专区" href="/category/download" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {softSites.map((s) => <SiteCard key={s.id} site={s} />)}
        </div>

        <SectionTitle title="🧰 工具专区" href="/category/webmaster" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {toolSites.map((s) => <SiteCard key={s.id} site={s} />)}
        </div>

        <SectionTitle title="🏆 全球排行榜" href="/ranking" />
        <ol className="bg-white dark:bg-gray-900 rounded-2xl divide-y divide-gray-100 dark:divide-gray-800 shadow-sm">
          {topGlobal.map((s, i) => (
            <li key={s.id} className="flex items-center gap-4 p-3">
              <span className="w-8 text-center font-extrabold text-amber-500">{i + 1}</span>
              <Link href={`/site/${s.id}`} className="font-medium hover:text-indigo-600 truncate">{s.name}</Link>
              <span className="ml-auto text-sm text-gray-500 shrink-0">👁 {s.views.toLocaleString()} ❤️ {s.likes.toLocaleString()}</span>
            </li>
          ))}
        </ol>

        <SectionTitle title="❤️ 点赞排行榜" href="/ranking" />
        <ol className="bg-white dark:bg-gray-900 rounded-2xl divide-y divide-gray-100 dark:divide-gray-800 shadow-sm mb-12">
          {topLikes.map((s, i) => (
            <li key={s.id} className="flex items-center gap-4 p-3">
              <span className="w-8 text-center font-extrabold text-rose-500">{i + 1}</span>
              <Link href={`/site/${s.id}`} className="font-medium hover:text-indigo-600 truncate">{s.name}</Link>
              <span className="ml-auto text-sm text-gray-500 shrink-0">❤️ {s.likes.toLocaleString()}</span>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
