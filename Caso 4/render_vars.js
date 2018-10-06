var http = require('http');
var fs = require("fs"); /* Se encarga de comunicarse con el sistema de archivos del pc*/

http.createServer(function(req,res){
	fs.readFile("./index.html", function(err,html){
		var html_string = html.toString();
		//Expresión regular que busca en el HTML donde haya {x}
		var variables = html_string.match(/[^\{\}]+(?=\})/g);
		var nombre = "Juan Carlos S.";
		
		for (var i = variables.length - 1; i >= 0; i--) {
			//Lo ejecuto como código js para obener el valor de la variable
			var value = eval(variables[i]);
			
			//Reemplazo el contenido entre {} por su valor
			html_string = html_string.replace("{"+variables[i]+"}",value);
		};
		
		res.writeHead(200,{"Content-Type":"text/html"});
		res.write(html_string);
		res.end();
	});
}).listen(8080);