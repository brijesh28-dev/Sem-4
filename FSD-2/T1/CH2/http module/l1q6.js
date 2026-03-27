//1.create 1 page with 2 links (/home and /about) both pages must contain html tag contain and requred contain on both pages
//if user add any other url => plain text of 'page not found'

var http = require('http')

http.createServer(function(req,res){
    
   
  
    if(req.url === '/home'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>hom page</h1>' + '<a hreaf = "/about">about</a>')
        res.end()
    }
    if(req.url === '/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>about page</h1>')
        res.end()
    }

    else{
        res.writeHead(200,{'content-type':'text/plain'})
        res.write('page not found')
        res.end()
    }
}).listen(3120,()=>{
    console.log('server is on')
})