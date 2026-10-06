#!/bin/bash
# GlobalHub 每日数据更新：重算排行 -> 重新构建 -> 推送到 gh-pages
set -e
cd /home/hatch/workspace/globalhub
export PATH="$HOME/.nvm/versions/node/v20.18.0/bin:/usr/local/bin:/usr/bin:/bin"
echo "[$(date '+%F %T')] start globalhub daily update"
node scripts/merge-likes.mjs || true
npm run update
npm run build
touch out/.nojekyll
python3 tools/deploy_ghpages.py curzydj8/globalhub /home/hatch/workspace/globalhub/out gh-pages
echo "[$(date '+%F %T')] done"
