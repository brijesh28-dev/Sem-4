// 1.write a onjact "s2"
// task: Adition of a b ,
//  B subttraction of C[1] and b must be positive value
// C c*
// add all and to 

var fs=require("fs")
let d={d:{a:10,b:20,c:[30,10]}}
fs.writeFileSync("s2.txt",JSON.stringify(d))
data=fs.readFileSync("s2.txt","utf-8")
data=JSON.parse(data)
A=data.d.a+data.d.b
B=data.d.c[1]-data.d.b
if(B<0){
    B=B*(-1)
}
C=data.d.c[0]*data.d.c[1]
console.log("Sum: "+A+"\n Subtraction: "+B+"\n Multification: "+C)
fs.appendFileSync("s2.txt"," "+A+""+B+""+C)
const finalData = fs.readFileSync("s2.txt", "utf-8")
console.log(finalData)
