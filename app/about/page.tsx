export const metadata = { title: '关于我们 - GlobalHub' };

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold mb-6">关于 GlobalHub</h1>
      <div className="prose-like space-y-4 text-gray-700 dark:text-gray-300 leading-8">
        <p><strong>GlobalHub（全球互联网资源百科导航平台）</strong>是一个超大型互联网资源百科导航站。
          它不只是网址收藏夹，而是「官网数据库 + 资源目录 + 工具平台 + 网站排行榜 + 资源百科」五位一体。</p>
        <h2 className="text-xl font-bold pt-4">无需注册 · 完全免费</h2>
        <p>全站匿名访问，无需登录。点赞记录保存在你的浏览器本地，导出后可参与全站排行共建。</p>
        <h2 className="text-xl font-bold pt-4">数据与更新</h2>
        <p>全部数据以 JSON + Markdown 开源存放，每日由 GitHub Actions 自动重算排行榜、生成 Sitemap 与 RSS。</p>
        <h2 className="text-xl font-bold pt-4">参与共建</h2>
        <p>发现好网站？欢迎到 GitHub 仓库提 PR（加到 <code>data/sites.json</code>）或在 Discussions 留言，人工审核后收录。</p>
        <p><a className="text-indigo-600 hover:underline" href="https://github.com/curzydj8/globalhub" target="_blank" rel="noopener">→ GitHub 仓库</a></p>
      </div>
    </main>
  );
}
