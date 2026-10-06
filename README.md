# GlobalHub 🌐

全球互联网资源百科导航平台：官网数据库 + 资源目录 + 工具平台 + 网站排行榜 + 资源百科。

**在线访问**: https://curzydj8.github.io/globalhub/

## 技术栈

- Next.js 15 (App Router, `output: 'export'` 全静态导出)
- Tailwind CSS 3
- GitHub Pages（gh-pages 分支）+ 每日自动更新 cron

## 部署

- 源码在 `main` 分支；`npm run build` 产物 `out/` 推送到 `gh-pages` 分支，Pages 从该分支发布
- 推送脚本：`tools/deploy_ghpages.py`（Git Database API 批量上传，支持断点续传）
- 每日 08:19（北京时间）自动更新：`tools/daily_update.sh`（合并点赞 → 重算数据 → 重新构建 → 推送）
- `.github/workflows/` 保留了 Actions 方案（deploy/update/sync-likes），需有 workflow 权限的 token 才能启用

## 本地开发

```bash
npm install
npm run update   # 生成 ranking.json / tags.json / sitemap.xml / rss.xml / search-index.json
npm run dev
npm run build    # 产物在 out/
```

## 数据贡献

- 新增站点：编辑 `data/sites.json` 后提 PR
- 点赞合并：把点赞 JSON 放到 `data/likes-pending/`，每周自动合并（`scripts/merge-likes.mjs`）
- 站点百科：`content/sites/<id>.md`（front matter 支持 pros/cons）

## 目录结构

```
app/            页面（首页/分类/详情/排行/标签/搜索/点赞/关于）
components/     UI 组件
lib/            数据/排行/搜索/路径工具
data/           sites.json / categories.json（源码） + ranking.json / tags.json（生成）
scripts/        update-data.mjs / merge-likes.mjs
content/sites/  Markdown 百科
public/         sitemap.xml / rss.xml / search-index.json（生成）
```

## 许可

MIT
