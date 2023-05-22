const express=require("express");
const path=require("path");
const router=express.Router();
const rootDir=require("../util/path");

router.get('/add-product',(req,res,next)=>{
  //  res.sendFile(path.join(__dirname,'../','views','add-product.html'));
  res.sendFile(path.join(rootDir,'views','add-product.html'));
})
router.post('/add-product',(req,res)=>{
    console.log(req.body.title);
    res.redirect('/');
    //res.send("<h1>HIIII</h1>")
})
router.get('/contactUs',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','contactUs.html'))
})
module.exports=router;