const mysql = require('mysql'); 
//create database connection 

const conn = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: '123', 
    database: 'mydb1', 
    port: 3306,
});

//connect to database 
conn.connect((err) => { 
    if (err) throw err; 
    console.log('Mysql Connected...'); 
}); 
module.exports = conn;