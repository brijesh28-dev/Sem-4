//fatch a quary string from the url 
//and check if year is leap year or not 

var url=require("url")
var address= "http://localhost:8080/defualt.htm?year=2028"
var q=url.parse(address,true)
if(q.query.year%4==0){
    console.log("leap year")
}

