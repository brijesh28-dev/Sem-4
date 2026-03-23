//wtite and apend and read on one file display in consol

const fs=require("fs")
const EE=require("events")
const ee=new EE()

ee.on("write",()=>{
    fs.watchFile("file1.txt","Data")

    ee.on("append",()=>{
        fs.appendFile("file1.txt","\n Append data")
          ee.on("read",()=>{
            let aa=fs.readFile("file1.txt","utf-8")
            console.log(aa)
          })
            ee.emit("read")

    })
    ee.emit("append")
})
ee.emit("write")