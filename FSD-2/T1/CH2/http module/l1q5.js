const hp = require("http")
const fs = require("fs")
hp.createServer(function(req,res){
    if(req.url==="/"){
        res.writeHead(200,{"content-type":"image/png"})
        res.end('<h1>Hello</h1> <img src="i1.png">')

    }
    else if(req.url==="/img"){
      const img=fs.readFileSync("i1.png")
      res.writeHead(200,{"content-type":"image/png"})
      res.end(img)
    
    }
}).listen(3120,()=>{
    console.log("server is running")
})