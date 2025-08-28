const express=require("express");

const app=express();

app.get("/welcome/:username",(req,res)=>{
  const username=req.params.username;
  const role=req.query.role
  res.send(`<h1>Welcome ${username} , you role is ${role} `)
})




app.listen(3006,()=>{
    console.log("Server is up and running on port 3006.");
})

