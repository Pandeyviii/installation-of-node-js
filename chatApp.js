const express=require("express");
const bodyParser=require("body-parser");
const app=express();
const routes=require("./simple group chat application/routes2");
app.use(bodyParser.urlencoded({extended:false}));
app.use(routes);
app.listen(4000);