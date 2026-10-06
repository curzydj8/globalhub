'use client';
import { useState } from 'react';
import Link from 'next/link';
import type { Category } from '@/lib/data';
import ThemeToggle from './ThemeToggle';
import { asset } from '@/lib/path';

export default function Navbar({ categories }: { categories: Category[] }) {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-4">
        <Link href="/" className="text-xl font-extrabold shrink-0">
          🌐 GlobalHub
        </Link>
        <div className="relative hidden md:block">
          <button onClick={() => setOpen(!open)} className="px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-sm font-medium">
            📂 全部分类 ▾
          </button>
          {open && (
            <div className="absolute top-12 left-0 w-[640px] max-h-[70vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 p-4 grid grid-cols-3 gap-1"
              onMouseLeave={() => setOpen(false)}>
              {categories.map((c) => (
                <Link key={c.slug} href={`/category/${c.slug}`} onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-950 text-sm">
                  {c.icon} {c.name}
                </Link>
              ))}
            </div>
          )}
        </div>
        <Link href="/ranking" className="hidden md:block text-sm font-medium hover:text-indigo-600">🏆 排行</Link>
        <Link href="/tags" className="hidden md:block text-sm font-medium hover:text-indigo-600">🏷️ 标签</Link>
        <div className="ml-auto flex items-center gap-1">
          <Link href="/likes" className="px-3 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
            ❤️ 我的点赞
          </Link>
          <Link href="/about" className="px-3 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 hidden sm:block">
            关于
          </Link>
          <button onClick={() => alert('登录/注册功能敬请期待（v2.0）')}
            className="px-4 py-2 text-sm rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 hidden sm:block">
            登录 / 注册
          </button>
          <ThemeToggle />
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2">☰</button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden max-h-[60vh] overflow-y-auto border-t border-gray-100 dark:border-gray-800 p-4 grid grid-cols-2 gap-1">
          {categories.map((c) => (
            <Link key={c.slug} href={`/category/${c.slug}`} onClick={() => setMobileOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-950 text-sm">
              {c.icon} {c.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
