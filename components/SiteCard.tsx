import Link from 'next/link';
import type { Site } from '@/lib/data';
import LikeButton from './LikeButton';
import { asset } from '@/lib/path';

export default function SiteCard({ site }: { site: Site }) {
  const initial = site.name.charAt(0);
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-4 shadow-sm hover:shadow-md transition flex flex-col">
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-xl font-bold text-indigo-600 dark:text-indigo-300 shrink-0 overflow-hidden">
          {site.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={asset(site.logo)} alt={site.name} className="w-full h-full object-cover"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
          ) : null}
          <span className={site.logo ? 'hidden' : ''}>{initial}</span>
        </div>
        <div className="min-w-0 flex-1">
          <Link href={`/site/${site.id}`} className="font-bold hover:text-indigo-600 dark:hover:text-indigo-400 truncate block">
            {site.name}
          </Link>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            {site.country} · {site.language} · 👁 {site.views.toLocaleString()}
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-3 line-clamp-2 flex-1">{site.description}</p>
      <div className="flex flex-wrap gap-1.5 mt-3">
        {site.tags.slice(0, 3).map((t) => (
          <Link key={t} href={`/tags/${encodeURIComponent(t)}`}
            className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900">
            {t}
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-between mt-3">
        <LikeButton id={site.id} baseLikes={site.likes} />
        <a href={site.url} target="_blank" rel="noopener" className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
          访问官网 →
        </a>
      </div>
    </div>
  );
}
