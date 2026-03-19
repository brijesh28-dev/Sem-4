// write a file using  sychrnous opration
// create  folder >  one file > append some data >read data > rename tht file > delete
var fs=require("fs")
fs.mkdirSync("temp")
fs.writeFileSync("temp/t1.txt","Hello")
const data = fs.readFileSync("temp/t1.txt")
console.log(data.toString())
fs.appendFileSync("temp/t1.txt","\n New line")
fs.renameSync("temp/t1.txt","t2.txt")
fs.unlinkSync("t2.txt")
console.log("done")