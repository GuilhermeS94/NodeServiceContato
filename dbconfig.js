var db = require('mysql');//mmysel EXEMPLO

var connection = db.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'Contatos'
});

connection.connnect(function(err){
    if(err) throw err;
});

module.exports = connection;