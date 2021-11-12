var http = require('http');
var dt = require('./myFirstModule');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The Date and Time are currently: " +dt.myDateTime);
  res.end('Hello World!');
}).listen(8080);