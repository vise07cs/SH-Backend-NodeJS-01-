const express=require("express");

const router=express.Router()


router.get("/",(req,res)=>{
  res.send("User List ")
})

router.post("/",(req,res)=>{
  res.send("new user added")
})


module.exports=router;