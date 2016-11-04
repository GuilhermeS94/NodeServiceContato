var db = require('mysql');//mysql EXEMPLO

var connection = db.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    port: 3306,
    database: 'contatos'
});

connection.connect(function(err){
    if(err) throw err;
});

module.exports = connection;