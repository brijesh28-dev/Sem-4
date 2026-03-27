const hp = require("http")
let data={
    "name":"Brijesh",
    "sub":"Fsd-2"
}
hp.createServer(function(req,res){
    res.writeHead(200,{"content-type":"application/json"})
    
    res.end(JSON.stringify(data));

}).listen(3120,()=>{
    console.log("server is running")
})