var  MirkRequest=require('http');
MirkRequest.createServer(function(req,res){
    //res.writeHead(200, {'Content-Type': 'text/html'});
    //this line of code write header on page like http://localhost:8080
    res.write("Hello Mirkena");
    res.end();
}).listen(8080);