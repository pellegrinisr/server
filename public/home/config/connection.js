var mysql = require('mysql');
var connection = mysql.createConnection({
    host: process.env.db_host,
    user: process.env.db_user,
    password: process.env.db_pass,
    port: 3306,
    database: 'contact_db'
});

connection.connect(function(error) {
    if (error) throw error;
    console.log('connected as', connection.threadId);
});

module.exports = connection;