var express = require("express");
var route = express();
var banco = require('./dbconfig');

route.get('/', function(request, response){
    response.send("Home Page");
});

route.get('/message/:msg', function(request, response){
    response.send(request.params);
});

route.get('/insert', function(request, response){
    response.send("Insert Page");
});
route.post('/insert', function(request, response){
    
    banco.query('INSERT INTO agenda(Nome, Contato) VALUES(?, ?)', ['Ique','email@do.ique'],
        function(error, rows){
            if(error) return response.status(400).json(error);

            response.status(200).json(rows);
    });
});
route.get("/post", function(request, response){
    response.sendFile(__dirname + "/post.html");
});

route.get('/read', function(request, response){
    banco.query('SELECT * FROM agenda', function(error, rows){
        if(error) return response.status(400).json(error);
        console.log(rows);
        response.status(200).send(rows);
    });
    //response.send("Read Page");
});

route.get('/update', function(request, response){
    response.send("Update Page");
});

route.get('/delete', function(request, response){
    response.send("Delete Page");
});

route.listen(8000);