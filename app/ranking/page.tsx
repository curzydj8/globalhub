import { getRanking, getSitesByIds, getCategories } from '@/lib/data';
import RankingTabs from '@/components/RankingTabs';

export const metadata = { title: '排行榜 - GlobalHub', description: '全球网站排行榜：总榜、点赞榜、分类榜，每日自动更新。' };

export default function RankingPage() {
  const ranking = getRanking();
  const categories = getCategories();
  const byId = (ids: string[]) => getSitesByIds(ids);
  const byCategory: Record<string, any[]> = {};
  for (const c of categories) byCategory[c.slug] = byId(ranking.byCategory[c.slug] || []).slice(0, 100);

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold mb-6">🏆 排行榜</h1>
      <RankingTabs
        global={byId(ranking.global).slice(0, 100)}
        byLikes={byId(ranking.byLikes).slice(0, 100)}
        byCategory={byCategory}
        categories={categories.map((c) => ({ slug: c.slug, name: c.name, icon: c.icon }))}
      />
    </main>
  );
}
