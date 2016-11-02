var net = require("net");

var server = net.createServer(function(socket){
    console.info("Connection from: " + socket.remoteAddress);
    socket.end("Hello Wordl!!");
});

server.listen(8000, 'localhost');

console.info("Server listening on port 8000 from localhost");