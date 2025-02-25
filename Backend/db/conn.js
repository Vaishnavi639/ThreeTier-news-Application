const mysql = require("mysql2");

const conn = mysql.createConnection({
    user: process.env.DB_USER || "root",
    host: process.env.DB_HOST || "localhost",
    password: process.env.DB_PASSWORD || "root1306",
    database: process.env.DB_NAME || "db1"
});

conn.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }
    console.log("DB connected");
});

module.exports = conn;

