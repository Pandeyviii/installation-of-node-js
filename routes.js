const fs=require("fs");
const requestHandler=(req,res)=>{
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
}
//module.exports=requestHandler;
// module.exports={
//     handler:requestHandler,
//     text:"my name is vishal pandey how can i help you"
// }
// module.exports.handler=requestHandler;
// module.exports.text="Hi how are u"
exports.handler=requestHandler;
exports.text="Hi how are u"
