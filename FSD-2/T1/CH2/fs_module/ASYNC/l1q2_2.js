
var fs=require("fs")
fs.writeFile("l1q1.txt","How R U",(error)=>{
    if(error) throw error;
    console.log("write action performed in async file")

})
console.log("async done")