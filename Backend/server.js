const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
require("./db/conn");
const router = require("./Route/router");

const port = 8081;

//app.get("/",(req,res)=>{
//    res.send("server start")
//});
//middleware
app.unsubscribe(express.json())
app.unsubscribe(cors());


app.use(router);

app.listen(port,()=>{
    console.log("server starts at port  no:" + port);
})