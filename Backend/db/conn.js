const mysql = require("mysql2");
const conn = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"root1306",
    database:"db1"
});

conn.connect((err)=>{
    if(err) throw err;
    console.log("DB connected");
});

module.exports = conn;