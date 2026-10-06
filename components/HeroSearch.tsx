'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { Category } from '@/lib/data';

type Mode = 'global' | 'ai' | 'category';

export default function HeroSearch({ categories }: { categories: Category[] }) {
  const [q, setQ] = useState('');
  const [mode, setMode] = useState<Mode>('global');
  const [cat, setCat] = useState('ai');
  const router = useRouter();

  const go = () => {
    if (!q.trim() && mode !== 'category') return;
    if (mode === 'ai') {
      alert('AI 搜索即将上线：v1.1 将接入大模型 API，敬请期待。');
      return;
    }
    const params = new URLSearchParams({ q: q.trim(), mode });
    if (mode === 'category') params.set('cat', cat);
    router.push(`/search?${params.toString()}`);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <div className="flex gap-2 justify-center mb-4">
        {([['global', '全局搜索'], ['ai', 'AI搜索'], ['category', '分类搜索']] as [Mode, string][]).map(([m, label]) => (
          <button key={m} onClick={() => setMode(m)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${mode === m ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'}`}>
            {label}
          </button>
        ))}
      </div>
      <div className="flex gap-2">
        {mode === 'category' && (
          <select value={cat} onChange={(e) => setCat(e.target.value)}
            className="px-4 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm max-w-[140px]">
            {categories.map((c) => <option key={c.slug} value={c.slug}>{c.icon} {c.name}</option>)}
          </select>
        )}
        <input value={q} onChange={(e) => setQ(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && go()}
          placeholder={mode === 'ai' ? '用自然语言描述你想找的资源…' : '搜索网站、工具、资源…'}
          className="flex-1 px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        <button onClick={go} className="px-8 py-4 rounded-2xl bg-indigo-600 text-white font-bold shadow-lg hover:bg-indigo-700">
          搜索
        </button>
      </div>
    </div>
  );
}
