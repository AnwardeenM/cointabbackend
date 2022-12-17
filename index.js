const express = require("express");
const connection = require("./configs/db");
const app = express();


app.get("/",(req,res)=>{
    res.send("This is the Home Page");
})

app.listen(8080,async()=>{
    try{
        await connection
        console.log("MongoDb is connected")
    }
    catch(err){
        console.log("Connection is not successful",err)
    }
    console.log("connection is running at PORT 8080");
})

