var url=require("url")
var address= "http://www.google.com/exam.txt?c1=hello&c2=FSD2T1test&c3=welcometLJU#allthebest"
var q=url.parse(address,true)
console.log(q)