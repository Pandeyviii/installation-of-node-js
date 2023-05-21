//const http=require("http");
// const routes=require("./routes")
// console.log(routes.text);
const express=require("express");
const bodyParser=require("body-parser")
const app=express();
app.use(bodyParser.urlencoded({extended:false}))
app.use('/add-product',(req,res,next)=>{
    res.send("<form action='/product' method='POST'><input type='text' name='title'><label>Enter Quantity></label><input type='text' name='size'><button type='submit'>Add a Product</button></form>");
})
app.use('/product',(req,res)=>{
    console.log(req.body);
    res.redirect('/');
})
app.use('/',(req,res,next)=>{
    res.send('<h1>hello from express js</h1>');
})
// const server=http.createServer(app);
// server.listen(4000);
app.listen(4000);