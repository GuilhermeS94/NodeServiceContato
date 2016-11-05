var express = require("express");
var conversor = require("body-parser");
var route = express();
var banco = require('./dbconfig');

route.use(conversor.urlencoded({extended:true}));

route.get('/', function(request, response){
    response.send("Home Page");
});

//insert Page
route.get("/insert", function(request, response){
    response.sendFile(__dirname + "/post.html");
});
//insert Action
route.post('/insert', function(request, response){
    var nome = request.body.Nome.trim();
    var contato = request.body.Contato.trim();

    if(!nome || !contato){        
        return response.status(200).json({ inseriu : false, msg : "Campos não preenchidos!!!"});;
    }

    banco.query('INSERT INTO agenda(Nome, Contato) VALUES(?, ?)', [nome,contato],
        function(error, rows){
            if(error) return response.status(400).json(error);

            response.status(200).json({ inseriu : true, obj : request.body});
    });
});

//list all
route.get('/read', function(request, response){
    banco.query('SELECT * FROM agenda', function(error, rows){
        if(error) return response.status(400).json(error);
        console.log(rows);
        response.status(200).send(rows);
    });
});

//update Page, with value
route.get("/up/:id", function(request, response){
    if(!request.params.id){        
        return response.status(200).json({ leu : false, msg : "Id não especificado!!!"});;
    }
    var contatoID = request.params.id;
    banco.query('SELECT * FROM agenda WHERE Id=?', [contatoID], function(error, row){
        if(error) return response.status(400).json(error);

        var item = row[0];
        var form = '<form action="/up" method="POST">';
    
        form += '<input type="hidden" value="'+item.Id+'" name="IDcontao" id="IDcontao">';
        form += '<input type="text" value="'+item.Nome+'" name="Nome" id="Nome">';
        form += '<input type="text" value="'+item.Contato+'" name="Contato" id="Contato">';

        form += '<input type="submit" value="Enviar">';

        return response.status(200).send(form);
    });
});
//update Action
route.post('/up', function(request, response){
    var nome = request.body.Nome.trim();
    var contato = request.body.Contato.trim();
    var id = request.body.IDcontao;

    if(!nome || !contato || !id){
        response.status(200).json({ atualizou : false, msg : "Campos não preenchidos!!!"});
        return;
    }

    banco.query('UPDATE agenda SET Nome=?, Contato=? WHERE Id=?', [nome,contato,id],
        function(error, rows){
            if(error) return response.status(400).json(error);

            response.status(200).json({ atualizou : true, obj : request.body});
    });
});

//delete page
route.get('/delete', function(request, response){
    response.send("Delete Page");
});

route.listen(8000);
console.info("Server running on 8000 DOOR...");