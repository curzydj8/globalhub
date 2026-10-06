'use client';
import { useEffect, useState } from 'react';
import SiteCard from '@/components/SiteCard';
import { asset } from '@/lib/path';

interface Entry {
  id: string; name: string; description: string; tags: string[];
  category: string; country: string; url: string; views: number; likes: number;
  language: string; logo: string; updated: string;
}

export default function SearchPage() {
  const [index, setIndex] = useState<Entry[] | null>(null);
  const [q, setQ] = useState('');
  const [mode, setMode] = useState('global');
  const [cat, setCat] = useState('');
  const [results, setResults] = useState<Entry[]>([]);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    fetch(asset('/search-index.json')).then((r) => r.json()).then(setIndex).catch(() => setIndex([]));
    const sp = new URLSearchParams(window.location.search);
    const iq = sp.get('q') || '';
    const imode = sp.get('mode') || 'global';
    const icat = sp.get('cat') || '';
    setQ(iq); setMode(imode); setCat(icat);
    if (iq || icat) setTimeout(() => doSearch(iq, imode, icat), 300);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const doSearch = (query: string, m: string, c: string, idx?: Entry[] | null) => {
    const data = idx !== undefined ? idx : index;
    if (!data) return;
    if (m === 'ai') { alert('AI 搜索即将上线（v1.1）'); return; }
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    const out = data
      .filter((s) => !c || s.category === c)
      .map((s) => {
        const hay = `${s.name} ${s.description} ${s.tags.join(' ')} ${s.country}`.toLowerCase();
        let hit = 0;
        for (const t of terms) if (hay.includes(t)) hit++;
        return { s, hit };
      })
      .filter((x) => terms.length === 0 || x.hit > 0)
      .sort((a, b) => b.hit - a.hit || (b.s.views + b.s.likes * 50) - (a.s.views + a.s.likes * 50))
      .slice(0, 60)
      .map((x) => x.s);
    setResults(out);
    setSearched(true);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold mb-6">🔍 搜索</h1>
      <div className="flex gap-2 max-w-2xl">
        <input value={q} onChange={(e) => setQ(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && doSearch(q, mode, cat)}
          placeholder="搜索网站、工具、资源…" className="flex-1 px-5 py-3 rounded-2xl border bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        <button onClick={() => doSearch(q, mode, cat)} className="px-6 py-3 rounded-2xl bg-indigo-600 text-white font-bold">搜索</button>
      </div>
      {searched && (
        <div className="mt-6">
          <p className="text-gray-500 mb-4">找到 {results.length} 个结果</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {results.map((s) => <SiteCard key={s.id} site={s as any} />)}
          </div>
        </div>
      )}
      {index === null && <p className="text-gray-400 mt-6">加载索引中…</p>}
    </main>
  );
}
