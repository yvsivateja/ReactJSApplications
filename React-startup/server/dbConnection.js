var mysql=require('mysql')

let mysqlConnection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'root',
	database : 'nodejsdb'
});

module.exports = mysqlConnection
