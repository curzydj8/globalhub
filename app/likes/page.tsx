'use client';
import { useEffect, useState } from 'react';
import SiteCard from '@/components/SiteCard';
import { asset } from '@/lib/path';

export default function LikesPage() {
  const [sites, setSites] = useState<any[]>([]);
  const [likedIds, setLikedIds] = useState<string[]>([]);

  useEffect(() => {
    const ids: string[] = JSON.parse(localStorage.getItem('gh-likes') || '[]');
    setLikedIds(ids);
    if (ids.length) {
      fetch(asset('/search-index.json')).then((r) => r.json()).then((all: any[]) => {
        setSites(all.filter((s) => ids.includes(s.id)));
      }).catch(() => {});
    }
  }, []);

  const exportJson = () => {
    const blob = new Blob([JSON.stringify(likedIds, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'my-likes.json';
    a.click();
  };

  const clear = () => {
    if (confirm('确定清空全部点赞吗？')) {
      localStorage.removeItem('gh-likes');
      setLikedIds([]); setSites([]);
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold mb-2">❤️ 我的点赞</h1>
      <p className="text-gray-500 mb-6">点赞保存在本机浏览器（{likedIds.length} 个）。导出 JSON 后可提 PR 到 <code>data/likes-pending/</code>，每周自动合并进全站排行榜。</p>
      <div className="flex gap-2 mb-6">
        <button onClick={exportJson} disabled={!likedIds.length} className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm disabled:opacity-40">导出点赞 JSON</button>
        <button onClick={clear} disabled={!likedIds.length} className="px-4 py-2 rounded-lg border text-sm disabled:opacity-40">清空</button>
      </div>
      {sites.length === 0 ? (
        <p className="text-gray-400">还没有点赞。去首页给喜欢的网站点个 ❤️ 吧。</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {sites.map((s) => <SiteCard key={s.id} site={s} />)}
        </div>
      )}
    </main>
  );
}
