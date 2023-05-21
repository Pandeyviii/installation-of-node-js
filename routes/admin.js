const express=require("express");
const router=express.Router();

router.get('/add-product',(req,res,next)=>{
    res.send("<form action='/admin/product' method='POST'><input type='text' name='title'><label>Enter Quantity></label><input type='text' name='size'><button type='submit'>Add a Product</button></form>");
})
router.post('/product',(req,res)=>{
    console.log(req.body);
    res.redirect('/');
})

module.exports=router;