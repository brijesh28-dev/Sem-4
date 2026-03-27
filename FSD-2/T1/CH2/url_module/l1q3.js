//print query string of url in file and usind ex6 call back 

var url=require("url")
const fs=require("fs")

var address= "http://localhost:8080/defualt.htm?year=2028"
var q=url.parse(address,true)
var q1=q.query

fs.writeFile("l1q1.txt",JSON.stringify(q1),(error)=>{
    if(error) throw error;
    console.log("write action performed")

    fs.readFile("l1q1.txt",'utf8',(error,data)=>{
        if(error) throw error;
        console.log(data)
    })


})