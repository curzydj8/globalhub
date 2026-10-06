'use client';
import { useState } from 'react';
import Link from 'next/link';

interface Props {
  global: any[]; byLikes: any[]; byCategory: Record<string, any[]>;
  categories: { slug: string; name: string; icon: string }[];
}

export default function RankingTabs({ global, byLikes, byCategory, categories }: Props) {
  const [tab, setTab] = useState<'global' | 'likes' | 'cat'>('global');
  const [cat, setCat] = useState(categories[0]?.slug || 'ai');
  const list = tab === 'global' ? global : tab === 'likes' ? byLikes : (byCategory[cat] || []);

  return (
    <div>
      <div className="flex gap-2 mb-4 flex-wrap">
        <button onClick={() => setTab('global')} className={`px-4 py-2 rounded-full text-sm font-medium ${tab === 'global' ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-gray-800 border'}`}>🏆 全球榜</button>
        <button onClick={() => setTab('likes')} className={`px-4 py-2 rounded-full text-sm font-medium ${tab === 'likes' ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-gray-800 border'}`}>❤️ 点赞榜</button>
        <button onClick={() => setTab('cat')} className={`px-4 py-2 rounded-full text-sm font-medium ${tab === 'cat' ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-gray-800 border'}`}>📂 分类榜</button>
        {tab === 'cat' && (
          <select value={cat} onChange={(e) => setCat(e.target.value)} className="px-3 py-2 rounded-full text-sm border bg-white dark:bg-gray-800">
            {categories.map((c) => <option key={c.slug} value={c.slug}>{c.icon} {c.name}</option>)}
          </select>
        )}
      </div>
      <ol className="bg-white dark:bg-gray-900 rounded-2xl divide-y divide-gray-100 dark:divide-gray-800 shadow-sm">
        {list.slice(0, 100).map((s: any, i: number) => (
          <li key={s.id} className="flex items-center gap-4 p-3">
            <span className={`w-8 text-center font-extrabold ${i < 3 ? 'text-amber-500' : 'text-gray-400'}`}>{i + 1}</span>
            <Link href={`/site/${s.id}`} className="font-medium hover:text-indigo-600 truncate">{s.name}</Link>
            <span className="ml-auto text-sm text-gray-500 shrink-0">👁 {s.views.toLocaleString()} ❤️ {s.likes.toLocaleString()}</span>
          </li>
        ))}
      </ol>
      <p className="text-xs text-gray-400 mt-3">总分 = 浏览量 + 点赞数 × 50，每日自动重算</p>
    </div>
  );
}
