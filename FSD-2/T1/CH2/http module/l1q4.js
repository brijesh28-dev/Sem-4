const hp = require("http")
hp.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html"})
    res.write(req.url+"<br>")
   
    res.end("URL fetched");

}).listen(3120,()=>{
    console.log("server is running")
})