var http = require('http');

var server = http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type" : "text/plain"});
    response.end("Hello World!!");
});

server.listen(8000);

console.info("Server listening on 8000 DOOR")