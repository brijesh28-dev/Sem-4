const hp = require("http")
hp.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/plain"})
    res.write("<h1> this is hello</h1>")
    res.end("Goodby");

}).listen(3120,()=>{
    console.log("server is running")
})