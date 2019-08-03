// [express実践入門](https://gist.github.com/mitsuruog/fc48397a8e80f051a145)
var express = require('express');
var app = express();

// HTTPリクエストを受け取る部分
app.get('/', function (req, res) {
  res.send('Hello World Express!');
});

// サーバーを起動する部分
var server = app.listen(3003, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
