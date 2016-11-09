var db = require('mssql');//sql server EXEMPLO

var config = {
    user: 'Guilherme',
    password: '',
    server: 'GS\SQLEXPRESS',
    database: 'AVALIACAO'
};

var connection = new db.Connection(config, function(err){
    if(err) throw err;
});

var sql = {
    configs: config,
    conn: connection,
    banco: db
};
module.exports = sql;