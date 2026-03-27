//fatch value from url 
//display op
//1.file name exam.txt
//file data: 
//2.filename fatch from given url "" 
//3.read containt from the file 
//4.send res to server and display data there "/page "

var http=require("http")
var fs=require("fs")
var url=require("url")

var address= "http://www.google.com/exam.txt?c1=hello&c2=fsd2T1test&c3=Welcometolju#Allthebest"
var q=url.parse(address,true)
var qh=q.pathname
var c1=q.query.c1
var c2=q.query.c2
var c3=q.query.c3
fs.writeFileSync("."+qh,+"Hello!"+"\n"+c2+"\n"+c3)
http.createServer(function(req,res){
      
    
    res.writeHead(200,{"content-type":"text/plain"})
    fs.readFile("."+qh,'utf8',(error,data)=>{
        if(error) throw error;
        res.end(data)
    })

    
}).listen(3120,()=>{
    console.log("server is running")
})


