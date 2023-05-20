const http=require("http");
const server=http.createServer((req,res)=>{
    //console.log("vishal pandey");
    if(req.url==='/home'){
        res.setHeader('Content-type','text-html');
        res.write('<html><body>Welcome Home</body></html>');
        //res.writable("Hi! welcome back vishal pandey")
    }
    else if(req.url==='/about'){
        res.write('<html><body>Welcome to about us page</body></html>');
    }
   else if(req.url==='/node'){
    res.write('<html><body>Welcome to node js project</body></html>');
   }
})
server.listen(4000);