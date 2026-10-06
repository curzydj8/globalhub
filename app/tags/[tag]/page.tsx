import { getTags, getSitesByIds } from '@/lib/data';
import SiteCard from '@/components/SiteCard';

export const dynamicParams = false;

export async function generateStaticParams() {
  return Object.keys(getTags()).map((tag) => ({ tag }));
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const name = decodeURIComponent(tag);
  const ids = getTags()[name] || [];
  const sites = getSitesByIds(ids);
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold">#{name}</h1>
      <p className="text-gray-500 mt-2">共 {sites.length} 个站点</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">
        {sites.map((s) => <SiteCard key={s.id} site={s} />)}
      </div>
    </main>
  );
}
