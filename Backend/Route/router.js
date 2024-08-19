const express = require("express");
const router = new express.Router();
const conn = require("../db/conn");


//register user data
router.post("/create",(req,res)=>{

    console.log(req.body);
});

module.exports = router;