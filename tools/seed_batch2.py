# GlobalHub 种子数据生成器 - 第 2 批
BATCH2 = [
# 编程开发
("python","Python","https://www.python.org","简洁强大的编程语言，AI 与数据科学首选。","dev",["编程语言"],"国际","英文",True),
("javascript","JavaScript / MDN","https://developer.mozilla.org/zh-CN/docs/Web/JavaScript","Web 前端核心语言。","dev",["编程语言"],"国际","中文",False),
("go","Go","https://go.dev","Google 出品的高并发系统语言。","dev",["编程语言"],"美国","英文",False),
("rust","Rust","https://www.rust-lang.org","内存安全的高性能系统语言。","dev",["编程语言"],"国际","英文",False),
("vscode","VS Code","https://code.visualstudio.com","微软免费开源代码编辑器。","dev",["IDE","开源"],"美国","英文",True),
("github","GitHub","https://github.com","全球最大的代码托管与开源协作平台。","opensource",["代码托管","开源","Git"],"美国","英文",True),
("gitlab","GitLab","https://about.gitlab.com","一体化 DevOps 平台。","opensource",["代码托管","DevOps"],"美国","英文",False),
("gitee","Gitee","https://gitee.com","国内主流代码托管平台。","opensource",["代码托管"],"中国","中文",False),
("dockerhub","Docker Hub","https://hub.docker.com","最大的容器镜像仓库。","opensource",["容器","镜像"],"美国","英文",False),
# 数据库
("mysql","MySQL","https://www.mysql.com","最流行的开源关系型数据库。","database",["MySQL","开源"],"美国","英文",False),
("postgresql","PostgreSQL","https://www.postgresql.org","功能强大的开源关系数据库。","database",["PostgreSQL","开源"],"国际","英文",False),
("mongodb","MongoDB","https://www.mongodb.com","主流 NoSQL 文档数据库。","database",["MongoDB"],"美国","英文",False),
("redis","Redis","https://redis.io","高性能内存数据库与缓存。","database",["Redis"],"国际","英文",False),
# 服务器运维
("docker","Docker","https://www.docker.com","容器化技术的事实标准。","ops",["Docker","容器"],"美国","英文",True),
("kubernetes","Kubernetes","https://kubernetes.io","容器编排的事实标准。","ops",["Kubernetes","容器"],"国际","英文",False),
("nginx","Nginx","https://nginx.org","高性能 Web 服务器与反向代理。","ops",["Nginx"],"国际","英文",False),
("btpanel","宝塔面板","https://www.bt.cn","简单好用的 Linux 服务器管理面板。","ops",["Linux","面板"],"中国","中文",False),
# 网络工具
("cloudflare","Cloudflare","https://www.cloudflare.com","CDN、DNS 与网络安全服务。","nettools",["CDN","DNS"],"美国","英文",False),
("whois","WHOIS 查询","https://who.is","域名注册信息查询。","nettools",["WHOIS查询"],"美国","英文",False),
("speedtest","Speedtest","https://www.speedtest.net","全球知名的网速测试。","nettools",["网速测试"],"美国","英文",False),
# 网络安全
("cve","CVE 漏洞库","https://www.cve.org","官方漏洞编号数据库。","security",["漏洞数据库"],"美国","英文",False),
("virustotal","VirusTotal","https://www.virustotal.com","多引擎文件/URL 安全检测。","security",["安全工具"],"美国","英文",False),
("shodan","Shodan","https://www.shodan.io","物联网设备搜索引擎。","security",["威胁情报"],"美国","英文",False),
# 下载中心
("microsoft","Microsoft","https://www.microsoft.com","微软官网，Windows/Office 下载。","download",["软件"],"美国","英文",False),
("ubuntu","Ubuntu","https://ubuntu.com","流行的 Linux 发行版。","download",["系统镜像"],"英国","英文",False),
("fdroid","F-Droid","https://f-droid.org","开源 Android 应用商店。","download",["软件","开源"],"国际","英文",False),
# 操作系统
("windows","Windows","https://www.microsoft.com/windows","全球使用最广的桌面操作系统。","os",["Windows"],"美国","英文",False),
("debian","Debian","https://www.debian.org","稳定著称的 Linux 发行版。","os",["Linux"],"国际","英文",False),
("androidos","Android","https://www.android.com","全球最大的移动操作系统。","os",["Android"],"美国","英文",False),
# 浏览器
("chrome","Chrome","https://www.google.com/chrome","全球市场份额第一的浏览器。","browser",["Chromium"],"美国","英文",False),
("firefox","Firefox","https://www.mozilla.org/firefox","开源隐私浏览器。","browser",["Firefox","开源"],"美国","英文",False),
("edge","Edge","https://www.microsoft.com/edge","微软 Chromium 内核浏览器。","browser",["Chromium"],"美国","英文",False),
# 安卓专区
("apkmirror","APKMirror","https://www.apkmirror.com","可信的 APK 下载站。","android",["APK"],"美国","英文",False),
("magisk","Magisk","https://github.com/topjohnwu/Magisk","Android Root 方案。","android",["Root","Magisk","开源"],"国际","英文",False),
("bluestacks","BlueStacks","https://www.bluestacks.com","知名安卓模拟器。","android",["模拟器"],"美国","英文",False),
# 苹果专区
("apple","Apple","https://www.apple.com","苹果官网。","apple",["iOS","macOS"],"美国","英文",False),
("macrumors","MacRumors","https://www.macrumors.com","苹果新闻与传闻社区。","apple",["iOS","macOS"],"美国","英文",False),
# 游戏专区
("steam","Steam","https://store.steampowered.com","全球最大的 PC 游戏平台。","games",["Steam"],"美国","英文",True),
("epic","Epic Games","https://store.epicgames.com","每周送免费游戏的平台。","games",["游戏平台"],"美国","英文",False),
("mame","MAME","https://www.mamedev.org","街机模拟器，多系统支持。","games",["模拟器","街机游戏","开源"],"国际","英文",False),
("nexusmods","Nexus Mods","https://www.nexusmods.com","最大的游戏 MOD 社区。","games",["MOD资源"],"英国","英文",False),
# 音乐专区
("spotify","Spotify","https://open.spotify.com","全球最大的流媒体音乐平台。","music",["音乐平台"],"瑞典","英文",False),
("net163","网易云音乐","https://music.163.com","国内流行的音乐社区。","music",["音乐平台"],"中国","中文",False),
("freesound","Freesound","https://freesound.org","免费音效素材库。","music",["音效资源"],"国际","英文",False),
# 图片设计
("unsplash","Unsplash","https://unsplash.com","高质量免费图片素材。","design",["图片素材"],"加拿大","英文",False),
("figma","Figma","https://www.figma.com","在线协作 UI 设计工具。","design",["UI设计"],"美国","英文",False),
("canva","Canva","https://www.canva.com","在线平面设计工具。","design",["UI设计"],"澳大利亚","英文",False),
("fontawesome","Font Awesome","https://fontawesome.com","流行的图标字体库。","design",["图标"],"美国","英文",False),
# 视频创作
("capcut","剪映","https://www.capcut.cn","字节跳动免费视频剪辑工具。","vcreate",["视频编辑"],"中国","中文",False),
("davinci","DaVinci Resolve","https://www.blackmagicdesign.com/products/davinciresolve","专业免费调色剪辑软件。","vcreate",["视频编辑"],"澳大利亚","英文",False),
("obs","OBS Studio","https://obsproject.com","免费开源直播录屏软件。","vcreate",["直播工具","开源"],"国际","英文",False),
# 办公工具
("notion","Notion","https://www.notion.so"," All-in-one 协作笔记工具。".strip(),"office",["Office"],"美国","英文",False),
("feishu","飞书","https://www.feishu.cn","字节跳动企业协作平台。","office",["Office"],"中国","中文",False),
("ilovepdf","iLovePDF","https://www.ilovepdf.com","免费在线 PDF 工具集。","office",["PDF"],"西班牙","英文",False),
("drawio","draw.io","https://www.drawio.com","免费在线流程图工具。","office",["流程图","开源"],"国际","英文",False),
]
