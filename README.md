# WebsiteLink
## 概要
リンクしておきたいサイトをJSONで保管しておき、  
そのJSONファイルを表示させるだけのくだらないページです。  
Google Feed APIの閉鎖に伴い、独自APIを作成しました。  
AWS API GatewayからLambdaを呼び出し、指定したRSSフィードの記事を返却してくれます。  
詳しくは[こちら](https://gist.github.com/shimapee/5f92c1bb3f7fbcb9892c4ae341fb20f1)

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
