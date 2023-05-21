//const http=require("http");
// const routes=require("./routes")
// console.log(routes.text);
const express=require("express");

const app=express();

const adminRoutes=require("./routes/admin");
const shopRoutes=require("./routes/shop");
const bodyParser=require("body-parser")

app.use(bodyParser.urlencoded({extended:false}))
app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>')
})


// const server=http.createServer(app);
// server.listen(4000);
app.listen(4000);