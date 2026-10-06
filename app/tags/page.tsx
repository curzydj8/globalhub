import Link from 'next/link';
import { getTags } from '@/lib/data';

export const metadata = { title: '标签云 - GlobalHub' };

export default function TagsPage() {
  const tags = getTags();
  const entries = Object.entries(tags).sort((a, b) => b[1].length - a[1].length);
  const max = entries[0]?.[1].length || 1;
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold mb-2">🏷️ 标签云</h1>
      <p className="text-gray-500 mb-6">共 {entries.length} 个标签，字号代表热度</p>
      <div className="flex flex-wrap gap-3 items-center">
        {entries.map(([tag, ids]) => {
          const size = 14 + Math.round((ids.length / max) * 18);
          return (
            <Link key={tag} href={`/tags/${encodeURIComponent(tag)}`}
              style={{ fontSize: size }}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900">
              {tag} <span className="text-gray-400 text-xs">{ids.length}</span>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
