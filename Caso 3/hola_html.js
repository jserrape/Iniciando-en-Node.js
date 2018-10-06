var http = require('http');
var fs = require("fs"); /* Se encarga de comunicarse con el sistema de archivos del pc*/



http.createServer(function(req,res){
	fs.readFile("./index.html", function(err,html){
		res.writeHead(200,{"Content-Type":"application/json"});
		res.write(JSON.stringify({nombre: "Juan Carlos", apellidos: "Serrano Pérez"}));
		res.end();
	});
}).listen(8080);