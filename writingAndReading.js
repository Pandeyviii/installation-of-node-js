const http=require("http");
const fs=require("fs");
const server=http.createServer((req,res)=>{
    const method=req.method;
    if(req.url==='/home'){
        res.setHeader('Content-type','text-html');
        res.write('<html><body><ul id="ul"></ul><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form><script></script></body></html>');
        //res.writable("Hi! welcome back vishal pandey")
        return res.end();
    }
    if(req.url==="/message" && method==="POST"){
        const body=[];
        req.on('data',(chunks)=>{
            body.push(chunks);
            console.log(chunks);
        });
        req.on('end',()=>{
            const parseBody=Buffer.concat(body).toString();
            console.log(parseBody);
            const message=parseBody.split('=')[1];
            fs.writeFileSync("message.txt",message);
        })
        res.statusCode=302;
        res.setHeader('Location','/home');
        return res.end();
    }
})
server.listen(4000);