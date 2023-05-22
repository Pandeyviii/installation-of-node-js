const express=require("express");
const router=express.Router();
const path=require("path");

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','shop.html'))
})
router.post('/success',(req,res)=>{
    res.send("<h1 style='color:green'>Form successfuly filled</h1>")
})

module.exports=router;