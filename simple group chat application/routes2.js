const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:false}));

const router=express.Router();
router.get("/login",(req,res,next)=>{
    res.send("<form onsubmit='localStorage.setItem(`userName`, document.getElementById(`userName`).value)' action='/' method='POST'><input type='text' name='userName' id='userName' value='vishal'><button type='submit'>Login</button></form>");
})
router.post('/',(req,res,next)=>{
    
    res.send(
        `<form action='/app' method='GET' onsubmit='document.getElementById("username").value=localStorage.getItem("userName")'>
        <input type='text' name='message' id='message'>
    <input type='hidden' name='userName' id='username'>
    <button type='submit'>Send</button></form>`);
})
router.get('/app',(req,res,next)=>{
    console.log(data);
    //console.log(req.body.message);
    res.end();
})
module.exports=router;
