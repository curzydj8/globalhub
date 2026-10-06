import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getSites, getSite, getSiteDoc, getSitesByIds, getCategory } from '@/lib/data';
import SiteCard from '@/components/SiteCard';
import LikeButton from '@/components/LikeButton';
import { asset } from '@/lib/path';

export const dynamicParams = false;

export async function generateStaticParams() {
  return getSites().map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const s = getSite(id);
  return { title: `${s?.name} - GlobalHub`, description: s?.description };
}

export default async function SitePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const site = getSite(id);
  if (!site) return <main className="p-8">站点不存在</main>;
  const cat = getCategory(site.category);
  const doc = getSiteDoc(id);
  const related = getSitesByIds(
    getSites()
      .filter((s) => s.id !== id && s.tags.some((t) => site.tags.includes(t)))
      .slice(0, 4)
      .map((s) => s.id)
  );
  const pros: string[] = doc?.front.pros || [];
  const cons: string[] = doc?.front.cons || [];

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'WebSite',
        name: site.name, url: site.url, description: site.description,
      }) }} />
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 md:p-8">
        <div className="flex items-start gap-5">
          <div className="w-20 h-20 rounded-2xl bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-3xl font-bold text-indigo-600 dark:text-indigo-300 shrink-0 overflow-hidden">
            {site.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={asset(site.logo)} alt={site.name} className="w-full h-full object-cover" />
            ) : site.name.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-3xl font-extrabold">{site.name}</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">{site.country} · {site.language}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {cat && <Link href={`/category/${cat.slug}`} className="text-xs px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full">{cat.icon} {cat.name}</Link>}
              {site.tags.map((t) => (
                <Link key={t} href={`/tags/${encodeURIComponent(t)}`} className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-indigo-100">#{t}</Link>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-6 text-gray-700 dark:text-gray-300 leading-8">{site.description}</p>
        <div className="flex items-center gap-6 mt-6 text-sm text-gray-500">
          <span>👁 浏览 {site.views.toLocaleString()}</span>
          <span>📅 更新 {site.updated}</span>
          <LikeButton id={site.id} baseLikes={site.likes} />
        </div>
        <a href={site.url} target="_blank" rel="noopener"
          className="mt-6 inline-block px-8 py-3 rounded-2xl bg-indigo-600 text-white font-bold hover:bg-indigo-700">
          访问官网 →
        </a>

        {(pros.length > 0 || cons.length > 0) && (
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            {pros.length > 0 && <div className="bg-emerald-50 dark:bg-emerald-950 rounded-xl p-4">
              <div className="font-bold text-emerald-700 dark:text-emerald-300 mb-2">✅ 优点</div>
              <ul className="list-disc ml-5 text-sm space-y-1">{pros.map((p, i) => <li key={i}>{p}</li>)}</ul>
            </div>}
            {cons.length > 0 && <div className="bg-amber-50 dark:bg-amber-950 rounded-xl p-4">
              <div className="font-bold text-amber-700 dark:text-amber-300 mb-2">⚠️ 不足</div>
              <ul className="list-disc ml-5 text-sm space-y-1">{cons.map((p, i) => <li key={i}>{p}</li>)}</ul>
            </div>}
          </div>
        )}

        {doc && (
          <article className="markdown-body mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{doc.content}</ReactMarkdown>
          </article>
        )}
      </div>

      {related.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">相关站点</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {related.map((s) => <SiteCard key={s.id} site={s} />)}
          </div>
        </div>
      )}
    </main>
  );
}
