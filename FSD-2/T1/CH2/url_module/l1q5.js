//write a js to load a simple html file defined as static 
//on node js web server 
// print its containt as html containt 
//on browsssser
var http=require("http")
var fs=require("fs")
var url=require("url")

var address= "http://localhost:8080/l1q5.html"
var q=url.parse(address,true)
var qh=q.pathname

http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html"})
    fs.readFile("."+qh,'utf8',(error,data)=>{
        if(error) throw error;
        res.end(data)
    })
}).listen(3120,()=>{
    console.log("server is running")
})


