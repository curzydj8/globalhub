import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import { getCategories } from '@/lib/data';

export const metadata: Metadata = {
  title: { default: 'GlobalHub - 全球互联网资源百科导航', template: '%s - GlobalHub' },
  description: '数万站点收录：AI、开源、工具、开发、设计……可搜索、可排行、可点赞的互联网资源百科。',
  keywords: ['网址导航', '资源百科', 'AI工具', '开源', '网站排行'],
  openGraph: { title: 'GlobalHub', description: '全球互联网资源百科导航', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const categories = getCategories();
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          (function(){try{var t=localStorage.getItem('gh-theme');
          if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))
          document.documentElement.classList.add('dark');}catch(e){}})();
        ` }} />
      </head>
      <body>
        <Navbar categories={categories} />
        {children}
        <footer className="border-t border-gray-100 dark:border-gray-800 mt-8">
          <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <div>
              <div className="font-bold mb-3">🌐 GlobalHub</div>
              <p className="text-gray-500">全球互联网资源百科导航平台</p>
            </div>
            <div>
              <div className="font-bold mb-3">发现</div>
              <div className="flex flex-col gap-2 text-gray-500">
                <a href="/ranking" className="hover:text-indigo-600">排行榜</a>
                <a href="/tags" className="hover:text-indigo-600">标签云</a>
                <a href="/rss.xml" className="hover:text-indigo-600">RSS 订阅</a>
              </div>
            </div>
            <div>
              <div className="font-bold mb-3">关于</div>
              <div className="flex flex-col gap-2 text-gray-500">
                <a href="/about" className="hover:text-indigo-600">关于我们</a>
                <a href="/likes" className="hover:text-indigo-600">我的点赞</a>
              </div>
            </div>
            <div>
              <div className="font-bold mb-3">开源</div>
              <div className="flex flex-col gap-2 text-gray-500">
                <a href="https://github.com/curzydj8/globalhub" target="_blank" rel="noopener" className="hover:text-indigo-600">GitHub 仓库</a>
                <a href="/sitemap.xml" className="hover:text-indigo-600">Sitemap</a>
              </div>
            </div>
          </div>
          <div className="text-center text-xs text-gray-400 pb-6">© 2026 GlobalHub · 数据每日自动更新</div>
        </footer>
      </body>
    </html>
  );
}
