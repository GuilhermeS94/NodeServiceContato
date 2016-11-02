var express = require("express");
var route = express();
//var banco = require('./dbconfig');

route.get('/', function(request, response){
    response.send("Home Page");
});

route.get('/message/:msg', function(request, response){
    response.send(request.params);
});

route.get('/insert', function(request, response){
    response.send("Insert Page");
}).post(function(request, response){
    response.send("Dado Inserido");
});

route.get('/read', function(request, response){
    response.send("Read Page");
});

route.get('/update', function(request, response){
    response.send("Update Page");
});

route.get('/delete', function(request, response){
    response.send("Delete Page");
});

route.listen(8000);