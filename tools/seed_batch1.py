# GlobalHub 种子数据生成器 - 第 1 批
# 每条: (id, name, url, desc, cat, tags, country, lang, featured)
BATCH1 = [
# AI专区
("chatgpt","ChatGPT","https://chat.openai.com","OpenAI 推出的 AI 对话助手，写作、编程、学习全能。","ai",["AI聊天","大模型"],"美国","英文",True),
("claude","Claude","https://claude.ai","Anthropic 推出的 AI 助手，擅长长文本与代码。","ai",["AI聊天","大模型"],"美国","英文",True),
("gemini","Gemini","https://gemini.google.com","Google 的多模态 AI 助手，搜索生态深度整合。","ai",["AI聊天","大模型"],"美国","英文",False),
("deepseek","DeepSeek","https://chat.deepseek.com","国产高性价比大模型，推理能力强。","ai",["AI聊天","大模型"],"中国","中文",True),
("qwen","通义千问","https://tongyi.aliyun.com","阿里巴巴的大语言模型，中文表现出色。","ai",["AI聊天","大模型"],"中国","中文",False),
("kimi","Kimi","https://kimi.moonshot.cn","月之暗面的长上下文 AI 助手，支持超长文档。","ai",["AI聊天","大模型"],"中国","中文",False),
("doubao","豆包","https://www.doubao.com","字节跳动 AI 助手，免费多模态。","ai",["AI聊天","大模型"],"中国","中文",False),
("copilot","Microsoft Copilot","https://copilot.microsoft.com","微软 AI 助手，深度集成 Office 与 Windows。","ai",["AI聊天","AI编程"],"美国","英文",False),
("cursor","Cursor","https://www.cursor.com","AI 原生代码编辑器，程序员效率神器。","ai",["AI编程"],"美国","英文",True),
("midjourney","Midjourney","https://www.midjourney.com","顶级 AI 绘画工具，艺术风格出众。","ai",["AI绘图"],"美国","英文",False),
("runway","Runway","https://runwayml.com","AI 视频生成与编辑平台。","ai",["AI视频"],"美国","英文",False),
("suno","Suno","https://suno.com","AI 音乐创作，一句话生成完整歌曲。","ai",["AI音乐"],"美国","英文",False),
("perplexity","Perplexity","https://www.perplexity.ai","AI 搜索引擎，带引用的精准问答。","ai",["AI搜索"],"美国","英文",True),
("ollama","Ollama","https://ollama.com","本地运行大模型的开源工具。","ai",["本地模型","开源"],"美国","英文",False),
("huggingface","Hugging Face","https://huggingface.co","AI 模型与数据集的开源社区。","ai",["AI模型","开源"],"美国","英文",True),
# 搜索引擎
("google","Google","https://www.google.com","全球最大的搜索引擎。","search",["综合搜索"],"美国","英文",True),
("bing","Bing","https://www.bing.com","微软搜索引擎，集成 AI 功能。","search",["综合搜索"],"美国","英文",False),
("baidu","百度","https://www.baidu.com","中文最大的搜索引擎。","search",["综合搜索"],"中国","中文",False),
("duckduckgo","DuckDuckGo","https://duckduckgo.com","注重隐私的搜索引擎。","search",["综合搜索","隐私"],"美国","英文",False),
# 视频平台
("youtube","YouTube","https://www.youtube.com","全球最大的视频分享平台。","video",["长视频"],"美国","英文",True),
("bilibili","哔哩哔哩","https://www.bilibili.com","年轻人喜爱的弹幕视频社区。","video",["长视频","动漫"],"中国","中文",True),
("netflix","Netflix","https://www.netflix.com","全球领先的流媒体影视平台。","video",["影视平台"],"美国","英文",False),
("douyin","抖音","https://www.douyin.com","短视频平台，国民级应用。","video",["短视频"],"中国","中文",False),
# 社交媒体
("twitter","X (Twitter)","https://x.com","全球实时社交与新闻讨论平台。","social",["社交平台"],"美国","英文",False),
("weibo","微博","https://weibo.com","中文社交媒体，热点聚集地。","social",["社交平台"],"中国","中文",False),
("reddit","Reddit","https://www.reddit.com","全球最大的兴趣社区聚合。","social",["社区论坛"],"美国","英文",False),
("telegram","Telegram","https://telegram.org","安全快速的即时通讯软件。","social",["即时通讯"],"阿联酋","英文",False),
# 新闻媒体
("bbc","BBC News","https://www.bbc.com/news","英国广播公司国际新闻。","news",["国际新闻"],"英国","英文",False),
("cnn","CNN","https://www.cnn.com","美国有线电视新闻网。","news",["国际新闻"],"美国","英文",False),
("xinhua","新华社","https://www.xinhuanet.com","中国国家通讯社。","news",["国际新闻"],"中国","中文",False),
("techcrunch","TechCrunch","https://techcrunch.com","全球知名科技新闻媒体。","news",["科技新闻"],"美国","英文",False),
# 地图导航
("googlemaps","Google Maps","https://maps.google.com","全球最常用的在线地图。","maps",["地图服务"],"美国","英文",False),
("amap","高德地图","https://www.amap.com","中国领先的地图导航服务。","maps",["地图服务"],"中国","中文",False),
("openstreetmap","OpenStreetMap","https://www.openstreetmap.org","开源免费的世界地图。","maps",["地图服务","开源"],"国际","英文",False),
# 翻译语言
("googletranslate","Google 翻译","https://translate.google.com","支持 130+ 语言的免费翻译。","translate",["在线翻译"],"美国","多语言",False),
("deepl","DeepL","https://www.deepl.com","以高质量著称的 AI 翻译。","translate",["在线翻译"],"德国","多语言",False),
("youdao","有道翻译","https://fanyi.youdao.com","网易出品的中英翻译工具。","translate",["在线翻译"],"中国","中文",False),
# 邮箱系统
("gmail","Gmail","https://mail.google.com","Google 免费邮箱，全球用户最多。","email",["免费邮箱"],"美国","英文",False),
("outlook","Outlook","https://outlook.live.com","微软免费邮箱与办公套件。","email",["免费邮箱"],"美国","英文",False),
("qqmail","QQ邮箱","https://mail.qq.com","腾讯出品，国内用户量巨大。","email",["免费邮箱"],"中国","中文",False),
# 云盘存储
("googledrive","Google Drive","https://drive.google.com","Google 云存储与协作办公。","cloud",["云存储"],"美国","英文",False),
("baidupan","百度网盘","https://pan.baidu.com","国内用户最多的个人网盘。","cloud",["网盘"],"中国","中文",False),
("dropbox","Dropbox","https://www.dropbox.com","老牌文件同步云存储。","cloud",["云存储"],"美国","英文",False),
# 学习教育
("coursera","Coursera","https://www.coursera.org","世界名校在线课程平台。","learn",["在线课程"],"美国","英文",False),
("khanacademy","可汗学院","https://www.khanacademy.org","免费的 K12 与大学课程。","learn",["在线课程"],"美国","英文",False),
("mooc163","中国大学MOOC","https://www.icourse163.org","国内高校在线课程平台。","learn",["在线课程"],"中国","中文",False),
("freecodecamp","freeCodeCamp","https://www.freecodecamp.org","免费学编程的开源社区。","learn",["编程学习","开源"],"美国","英文",False),
# 电子书文档
("mdn","MDN Web Docs","https://developer.mozilla.org","Web 开发权威文档。","docs",["技术文档"],"美国","英文",False),
("wikipedia","维基百科","https://www.wikipedia.org","全球最大的免费百科全书。","docs",["百科知识"],"国际","多语言",True),
("zlibrary","Z-Library","https://z-lib.fm","大型电子书资源库。","docs",["电子书"],"国际","多语言",False),
# 学术科研
("arxiv","arXiv","https://arxiv.org","开放获取的学术预印本平台。","academic",["论文平台"],"美国","英文",False),
("googlescholar","Google Scholar","https://scholar.google.com","学术文献搜索引擎。","academic",["学术搜索"],"美国","英文",False),
("cnki","中国知网","https://www.cnki.net","国内最大的学术文献数据库。","academic",["论文平台"],"中国","中文",False),
]
