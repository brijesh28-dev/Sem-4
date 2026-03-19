// write an array of objact with > 
// name age > file name student.txt >
// read file and display the objact on consol
let p=[
    {
        name:"Brijesh",
        age:48
    }
]
var fs=require("fs")
fs.writeFileSync("Student.txt",JSON.stringify(p))
const data = fs.readFileSync("Student.txt")
console.log(JSON.parse(data))