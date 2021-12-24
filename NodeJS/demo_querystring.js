var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  //code below use the variable url declared above
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month+" "+q.name;
  res.end(txt);
}).listen(8080);