var http = require('http');
var fs = require("fs"); /* Se encarga de comunicarse con el sistema de archivos del pc*/

fs.readFile("./index.html", function(err,html){
	http.createServer(function(req,res){
		res.write(html);
		res.end();
	}).listen(8080);
});

