//to pass a url and calculate the avg of 3 number passed as qparameter 
var url=require("url")
var address= "http://localhost:8080/defualt.htm?a=30&b=40&c=50"
var q=url.parse(address,true)
var a=parseInt((q.query.a))
var b=parseInt((q.query.b))
var c=parseInt((q.query.c))
console.log(a+b+c)

var avg=(a+b+c)/3
console.log(avg)