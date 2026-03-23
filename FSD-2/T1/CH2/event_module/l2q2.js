//1.check the radius its naagative r not 
//2.if <0 then display msg "must be  +ve" ethe calculate the parameter circle lse 
//3.also calcualte the 
//4.side is nagative or not if => 

const EE=require("events")
const ee=new EE()

var fun1 = (ra,side)=>{
   if(ra<0){
    console.log("Radius must be +ve")
   }else{
    pari=(2*3.14*ra)
   }
   if(side<0){
    console.log("Side must be +ve")
   }else{
    side=(4*side)
}
ee.on("print",(side,pari)=>{
    console.log("Perimeter :"+pari)
    console.log("Side "+side)
})
ee.emit("print",side,pari)

}
ee.on("mye1",fun1)

ee.emit("mye1",10,-10)
