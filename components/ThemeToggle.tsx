'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem('gh-theme');
    const init = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDark(init);
    document.documentElement.classList.toggle('dark', init);
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('gh-theme', next ? 'dark' : 'light');
  };
  return (
    <button onClick={toggle} aria-label="切换主题" className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
      {dark ? '☀️' : '🌙'}
    </button>
  );
}
