const express=require("express");

const router=express.Router()


router.get("/",(req,res)=>{
  res.send("Get orders")
})

router.post("/",(req,res)=>{
  res.send("Orders created")
})


module.exports=router;