import { getCategories, getRanking, getSitesByIds, getCategory } from '@/lib/data';
import SiteCard from '@/components/SiteCard';

export const dynamicParams = false;

export async function generateStaticParams() {
  return getCategories().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCategory(slug);
  return { title: `${c?.name} - GlobalHub`, description: c?.description };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = getCategory(slug);
  if (!cat) return <main className="p-8">分类不存在</main>;
  const ids: string[] = getRanking().byCategory[slug] || [];
  const sites = getSitesByIds(ids);
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">{cat.icon} {cat.name}</h1>
      <p className="text-gray-500 dark:text-gray-400 mt-2">{cat.description}</p>
      <p className="text-sm text-gray-400 mt-1">{cat.en} · 共 {sites.length} 个站点</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {cat.subcategories.map((s) => (
          <span key={s} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">{s}</span>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">
        {sites.map((s) => <SiteCard key={s.id} site={s} />)}
      </div>
    </main>
  );
}
