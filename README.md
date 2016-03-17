# WebsiteLink
## 概要
リンクしておきたいサイトをJSONで保管しておき、  
そのJSONファイルを表示させるだけのくだらないページです。  
JSONはこんな感じ…  
```
[
	{
		"sysname":"くらしの便利帳",
		"link":
		[
			{
				"category":"Java関連",
				"sub":
				[
					{
						"name":"Java API 1.4",
						"url":"http://docs.oracle.com/javase/jp/1.4/api/"
					},
					{
						"name":"Java API 1.5",
						"url":"http://docs.oracle.com/javase/jp/1.5.0/api/"
					},
					{
						"name":"Java API 1.6",
						"url":"http://docs.oracle.com/javase/jp/6/api/"
					},
					{
						"name":"Java API 1.7",
						"url":"http://docs.oracle.com/javase/jp/7/api/"
					},
					{
						"name":"Java API 1.8",
						"url":"http://docs.oracle.com/javase/jp/8/api/"
					},
					{
						"name":"Java アーカイブ",
						"url":"http://www.oracle.com/technetwork/java/archive-139210.html"
					},
					{
						"name":"あなたとJAVA",
						"url":"https://www.java.com/ja/"
					}
				]
			}
		]
	}
]
```

あとは、RSSも読めるようにしました。  
趣味ですｗ  