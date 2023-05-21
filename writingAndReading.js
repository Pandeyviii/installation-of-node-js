//const http=require("http");
// const routes=require("./routes")
// console.log(routes.text);
const express=require("express");
const app=express();
app.use((req,res,next)=>{
    console.log("in the middleware");
    next();
})
app.use((req,res,next)=>{
    res.send('<h1>Hi vishal pandey welcomes you');
    console.log("in the second middleware");
})
// const server=http.createServer(app);
// server.listen(4000);
app.listen(4000);