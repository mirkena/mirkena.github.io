var http = require('http');
var fs = require('fs');
var fs = require('fs');

fs.appendFile('Mirkenaye.txt', 'Hello Mirkena!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});
// fs.unlink('Mirkenaye.txt', function (err) {
//     if (err) throw err;
//     console.log('File deleted!');
// });

var data = fs.readFileSync('Mirkena.html', 'utf8');
//console.log(data);

http.createServer(function (req, res) {
    fs.readFile('demofile1.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });

}).listen(8080);