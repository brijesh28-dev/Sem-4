// read data from that file >
//  sort data in asce. >

var fs=require("fs")
fs.writeFileSync("l2q3.txt","1,5,6,4,2,8,9,7,3,10")
const data = fs.readFileSync("l2q3.txt")
const line=data.toString().split(",")
line.sort((a,b)=>a-b) 
console.log(line)