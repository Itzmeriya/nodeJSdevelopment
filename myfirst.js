var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'content-type' : 'text/html'});
    res.end('My name is Dophi');
}).listen(8080);