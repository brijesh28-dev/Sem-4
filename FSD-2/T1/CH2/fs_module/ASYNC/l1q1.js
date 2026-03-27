
var fs=require("fs")
fs.writeFile("l1q1.txt","How R U",(error)=>{
    if(error) throw error;
    console.log("write action performed")

})
fs.readFile("l1q1.txt","utf-8",(error,data)=>{    // Do not store it in any Var. 
    if(error) throw error;
    console.log(data)
}) 
fs.appendFile("l1q1.txt","\n This is append line",(error)=>{
    if(error) throw error;
    console.log("append file done")
}) 
fs.readFile("l1q1.txt","utf-8",(error,data)=>{    // Do not store it in any Var. 
    if(error) throw error;
    console.log(data)
})
fs.rename("l1q1.txt","renamel1q1.txt",(error)=>{
    if(error) throw error;
    console.log("rename done")
})

// fs.unlink("renamel1q1.txt",(error)=>{
//     if(error) throw error;
//     console.log("delete done")
//  })