# GlobalHub 种子数据生成器 - 第 3 批
BATCH3 = [
# 实用工具
("regex101","Regex101","https://regex101.com","在线正则表达式测试。","utils",["开发工具"],"美国","英文",False),
("jsoncn","JSON.cn","https://www.json.cn","JSON 格式化校验工具。","utils",["开发工具"],"中国","中文",False),
("exchangerate","XE 汇率","https://www.xe.com","实时汇率换算。","utils",["汇率换算"],"英国","英文",False),
("timeanddate","Time and Date","https://www.timeanddate.com","时区换算与世界时钟。","utils",["时区换算"],"挪威","英文",False),
# 数据查询
("ip138","IP138","https://www.ip138.com","IP、手机归属地综合查询。","dataquery",["IP查询","手机归属地"],"中国","中文",False),
("ipinfo","ipinfo.io","https://ipinfo.io","IP 地理位置 API。","dataquery",["IP查询"],"美国","英文",False),
("tianyancha","天眼查","https://www.tianyancha.com","企业信息查询。","dataquery",["企业查询"],"中国","中文",False),
# 天气气象
("accuweather","AccuWeather","https://www.accuweather.com","全球天气预报服务。","weather",["天气"],"美国","英文",False),
("windy","Windy","https://www.windy.com","可视化气象地图。","weather",["天气"],"捷克","英文",False),
("cma","中央气象台","https://www.nmc.cn","中国官方天气预报。","weather",["天气"],"中国","中文",False),
# 航天太空
("nasa","NASA","https://www.nasa.gov","美国国家航空航天局。","space",["NASA"],"美国","英文",False),
("spacex","SpaceX","https://www.spacex.com","商业航天领导者。","space",["SpaceX"],"美国","英文",False),
("n2yo","N2YO","https://www.n2yo.com","卫星实时追踪。","space",["卫星追踪"],"美国","英文",False),
# 金融财经
("yahoo_finance","Yahoo Finance","https://finance.yahoo.com","全球金融行情数据。","finance",["股票"],"美国","英文",False),
("eastmoney","东方财富","https://www.eastmoney.com","国内知名财经门户。","finance",["股票"],"中国","中文",False),
("goldprice","GoldPrice","https://goldprice.org","实时国际金价。","finance",["黄金"],"美国","英文",False),
# 电商购物
("amazon","Amazon","https://www.amazon.com","全球最大电商平台。","shop",["综合电商"],"美国","英文",False),
("taobao","淘宝","https://www.taobao.com","中国最大 C2C 电商平台。","shop",["综合电商"],"中国","中文",False),
("jd","京东","https://www.jd.com","中国自营电商巨头。","shop",["综合电商"],"中国","中文",False),
# 求职招聘
("linkedin","LinkedIn","https://www.linkedin.com","全球职业社交平台。","jobs",["招聘网站"],"美国","英文",False),
("bosszhipin","BOSS直聘","https://www.zhipin.com","直聘模式招聘平台。","jobs",["招聘网站"],"中国","中文",False),
("lagou","拉勾","https://www.lagou.com","互联网垂直招聘。","jobs",["招聘网站"],"中国","中文",False),
# 国际物流
("17track","17TRACK","https://www.17track.net","全球快递物流查询。","logistics",["快递查询"],"中国","中文",False),
("dhl","DHL","https://www.dhl.com","国际快递巨头。","logistics",["国际快递"],"德国","英文",False),
("maersk","马士基","https://www.maersk.com","全球最大集装箱航运公司。","logistics",["海运"],"丹麦","英文",False),
# 交通运输
("flightradar24","Flightradar24","https://www.flightradar24.com","全球航班实时追踪。","transport",["航空公司"],"瑞典","英文",False),
("12306","12306","https://www.12306.cn","中国铁路官方购票。","transport",["铁路"],"中国","中文",False),
("ctrip","携程","https://www.ctrip.com","在线旅行预订平台。","transport",["航空公司"],"中国","中文",False),
# 医疗健康
("mayoclinic","Mayo Clinic","https://www.mayoclinic.org","世界顶级医疗机构。","health",["医疗机构"],"美国","英文",False),
("dxy","丁香园","https://www.dxy.cn","中国医疗专业社区。","health",["医学资源"],"中国","中文",False),
("pubmed","PubMed","https://pubmed.ncbi.nlm.nih.gov","生物医学文献数据库。","health",["医学资源"],"美国","英文",False),
# 政府机构
("govcn","中国政府网","https://www.gov.cn","中华人民共和国中央人民政府。","gov",["中国政府"],"中国","中文",False),
("whitehouse","White House","https://www.whitehouse.gov","美国白宫官网。","gov",["美国政府"],"美国","英文",False),
("un","联合国","https://www.un.org","联合国官方网站。","gov",["联合国机构"],"国际","多语言",False),
# 企业数据库
("fortune500","财富世界500强","https://fortune.com/ranking/global500","财富杂志世界500强榜单。","companies",["世界500强"],"美国","英文",False),
("tencent","腾讯","https://www.tencent.com","中国互联网巨头。","companies",["科技企业"],"中国","中文",False),
("alibaba","阿里巴巴","https://www.alibaba.com","全球 B2B 电商平台。","companies",["科技企业"],"中国","中文",False),
# 国家数据库
("cia_factbook","CIA World Factbook","https://www.cia.gov/the-world-factbook","各国国情资料库。","countries",["国家资料"],"美国","英文",False),
("worldbank","世界银行数据","https://data.worldbank.org","全球经济社会发展数据。","countries",["国家资料"],"国际","英文",False),
# 城市数据库
("geonames","GeoNames","https://www.geonames.org","免费地理地名数据库。","cities",["城市资料"],"国际","英文",False),
("numbeo","Numbeo","https://www.numbeo.com","城市生活成本数据库。","cities",["城市资料"],"塞尔维亚","英文",False),
# 世界机场数据库
("iata","IATA","https://www.iata.org","国际航空运输协会。","airports",["IATA代码"],"加拿大","英文",False),
("ourairports","OurAirports","https://ourairports.com","开源机场数据库。","airports",["机场信息","开源"],"国际","英文",False),
# 世界港口数据库
("marinetraffic","MarineTraffic","https://www.marinetraffic.com","全球船舶实时追踪。","ports",["港口代码"],"希腊","英文",False),
# 国际地址数据库
("upupost","万国邮联 UPU","https://www.upu.int","万国邮政联盟官方。","address",["邮编规则"],"瑞士","英文",False),
# 网站建设与站长工具
("namecheap","Namecheap","https://www.namecheap.com","知名域名注册商。","webmaster",["域名注册"],"美国","英文",False),
("aliyun","阿里云","https://www.aliyun.com","国内领先云服务商。","webmaster",["主机与服务器"],"中国","中文",False),
("vultr","Vultr","https://www.vultr.com","高性价比云服务器。","webmaster",["主机与服务器"],"美国","英文",False),
("ahrefs","Ahrefs","https://ahrefs.com","专业 SEO 分析工具。","webmaster",["SEO工具"],"新加坡","英文",False),
("google_analytics","Google Analytics","https://analytics.google.com","网站流量统计分析。","webmaster",["统计分析"],"美国","英文",False),
("wordpress","WordPress","https://wordpress.org","全球最流行的建站 CMS。","webmaster",["CMS系统","开源"],"美国","英文",True),
("letsencrypt","Let's Encrypt","https://letsencrypt.org","免费 SSL 证书。","webmaster",["SSL证书"],"美国","英文",False),
("vercel","Vercel","https://vercel.com","前端应用托管平台。","webmaster",["主机与服务器"],"美国","英文",False),
("webarchive","Wayback Machine","https://web.archive.org","互联网档案馆，网页时光机。","webmaster",["SEO工具"],"美国","英文",False),
("similarweb","SimilarWeb","https://www.similarweb.com","网站流量分析工具。","webmaster",["统计分析"],"英国","英文",False),
]
