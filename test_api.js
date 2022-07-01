const express= require("express");
const app=express();
cont pool=require("./db.js");
app.use(express.json())//=> obj create to access the request from client side
//routes
//get data
//create data
//update data
//delete data
app.listen(3000,()=>{
    console.log("server is listening to port 3000  ");
}) 