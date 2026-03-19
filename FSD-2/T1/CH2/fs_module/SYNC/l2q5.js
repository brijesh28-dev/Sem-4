// array of objact name shape , 
// calculate the peremeter the square and circle by using side value anad dia meter and pearmet 
// valur respactivly write objact as well as perameter value of in shape .txt file
var fs=require("fs")
let p=[
{
name:"Square",
side:5
},
{
name:"Circle",
side:5   
}
]
fs.writeFileSync("Shape.txt",JSON.stringify(p))
const data=fs.readFileSync("Shape.txt","utf-8")
console.log(JSON.parse(data))
obj=JSON.parse(data)
peraM=3.14*(obj[1].side)*2
peraS=4*(obj[0].side)
let q={
    circleperameter:peraM,
    squareside:peraS
}
fs.appendFileSync("Shape.txt",JSON.stringify(q))
const ANS=fs.readFileSync("Shape.txt")
console.log(JSON.parse(ANS))