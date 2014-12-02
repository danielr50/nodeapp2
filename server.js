/*
var http = require('http');

http.createServer(function(req, res){
	res.writeHead(200,{'Content-type':'text/plain'});
	res.end('Hello!');
}).listen(8888, '192.168.0.29');
console.log('Webserver  has starter');
*/

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
	fs.readFile('index.html',function(err, data){
			res.writeHead(200,{'Content-type':'html'});
			res.end(data);
	});
}).listen(8888, '192.168.0.29');
console.log('Webserver  has starter');
