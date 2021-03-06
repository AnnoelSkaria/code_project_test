const express= require("express");
const app=express();
const pool=require("./db");
app.use(express.json())//=> obj create to access the request from client side
//routes
//get data
app.get("/users",async(req,res)=>{
    try{
        
     //  const allTodos=await pool.query(" select u.name,u.email,u.phone_number,array_to_string(array_agg(ad.doc_name), ',') AS  list_of_docs from users u,uploaded_docs ud,all_docs ad WHERE (u.id=ud.user_id) AND (ud.all_docs_id= ad.id) GROUP BY u.name,u.email,u.phone_number;"); 
       const allTodos=await pool.query(" select u.name,u.email,u.phone_number,array_to_string(array_agg(ad.doc_name), ',') as list_of_document,array_agg(ad.id)AS document_id from users u,uploaded_docs ud,all_docs ad WHERE (u.id=ud.user_id) AND (ud.all_docs_id= ad.id) GROUP BY u.name,u.email,u.phone_number ;")
       res.json(allTodos.rows);


    }
    catch(err)
    {
        console.error(err.message);
    }
})

app.listen(3000,()=>{
    console.log("server is listening to port 3000  ");
}) 