const express=require("express");

const app=express()

const books=require("./books")


app.use("/books",books)



app.listen(3012,()=>{
  console.log("Server running successfully on 3012")
})