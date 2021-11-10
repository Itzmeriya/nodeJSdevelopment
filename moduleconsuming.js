var http=require('http');
var dt = require('./myfirstmodule');
var sum = require('./myfirstmodule');
var a=10, b=5;
const hedge = ["Cecilie", "Lone"];
const stale = ["Emil", "Tobias", "Linus"];

http.createServer(function(req,res){
    res.writeHead(200,{'content-type' : 'text/html'})
    res.write("The date and time are currently: " +
    dt.myDateTime());
    res.write("Sum=" + sum.add(a,b));
    res.write("fullarray=" + sum.arr(hedge,stale));
    res.end();
}).listen(8080);



