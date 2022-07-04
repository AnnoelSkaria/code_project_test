const express= require("express");
const app=express();
const pool=require("./db");
app.use(express.json())//=> obj create to access the request from client side
//routes
//get data
app.get("/users",async(req,res)=>{
    try{
        const allTodos=await pool.query("SELECT*FROM USERS");
        res.json(allTodos.rows);

    }
    catch(err)
    {
        console.error(err.message);
    }
})
/*create data
                app.post("/user",async(req,res)=>{
                    try{
                        console.log(req.body);

                    }catch
                    {
                        console.error(err.message);
                    }
            })*/
            //update data
//delete data
app.listen(3000,()=>{
    console.log("server is listening to port 3000  ");
}) 