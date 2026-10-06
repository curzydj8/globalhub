'use client';
import { useEffect, useState } from 'react';

export default function LikeButton({ id, baseLikes }: { id: string; baseLikes: number }) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(baseLikes);
  useEffect(() => {
    const likes: string[] = JSON.parse(localStorage.getItem('gh-likes') || '[]');
    if (likes.includes(id)) {
      setLiked(true);
      setCount(baseLikes + 1);
    } else {
      setCount(baseLikes);
    }
  }, [id, baseLikes]);
  const toggle = () => {
    const likes: string[] = JSON.parse(localStorage.getItem('gh-likes') || '[]');
    if (liked) {
      localStorage.setItem('gh-likes', JSON.stringify(likes.filter((x) => x !== id)));
      setLiked(false);
      setCount((c) => c - 1);
    } else {
      localStorage.setItem('gh-likes', JSON.stringify([...likes, id]));
      setLiked(true);
      setCount((c) => c + 1);
    }
  };
  return (
    <button
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggle(); }}
      className={`px-3 py-1 rounded-full text-sm transition ${liked ? 'bg-rose-500 text-white' : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
    >
      {liked ? '❤️' : '🤍'} {count.toLocaleString()}
    </button>
  );
}
