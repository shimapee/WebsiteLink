const feedapi = "FeedAPI";
//url, 取得したいエントリ数, 表示させるタグid名
var feeds = [
  {
    "chanel": "yahoo",
    "url": "http://news.yahoo.co.jp/pickup/rss.xml",
    "getEntry": 10
  },
  {
    "chanel": "mainichi-flash",
    "url": "http://rss.rssad.jp/rss/mainichi/flash.rss",
    "getEntry": 10
  },
  {
    "chanel": "at-it",
    "url": "http://rss.rssad.jp/rss/itmatmarkit/rss.xml",
    "getEntry": 15
  },
  {
    "chanel": "itm-sec",
    "url": "http://rss.rssad.jp/rss/itmnews/2.0/news_security.xml",
    "getEntry": 10
  }
];

for (var i in feeds) {
  //console.log(feeds[i]);

  // request data
  data = {
    "rssurl": feeds[i].url,
    "maxcnt": 10
  };
  // Ajax - request lambda
  getFeed(JSON.stringify(data), feeds[i].chanel);
}

function getFeed(data, id) {
  $.ajax({
    type: "POST",
    url: feedapi,
    data: data,
    dataType: 'json'
  }).done(function(res){
    res = JSON.parse(res);
    console.log(res);
    for(var i in res) {
      var div = $("<div>");
      div.attr({
        "id": i
      });

      var a = $("<a>");
      a.attr({
        "href": res[i].link,
        "target": "_blank"
      });
      a.append(res[i].title.slice(0,21));
      div.append(a);
      $("#"+id).append(div);
    }
  });
};