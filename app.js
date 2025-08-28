const express=require("express");

const app=express();

const orderRouter=require("./order");
const userRouter=require("./users")


app.use("/orders",orderRouter);

app.use("/users",userRouter);







app.listen(3011,()=>{
    console.log("Server is up and running on port 3011.");
});


