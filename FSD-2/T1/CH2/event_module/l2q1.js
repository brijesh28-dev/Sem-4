// teo listner for a comon event 
// print number of event assosited withn emiter 
//remove one of the listner and call remainig listner again 
// also print remainig listner 

const EE = require("events")
const ee = new EE()

var fun1 = (msg)=>{
     console.log("msg from function1: "+msg)
};

var fun2 = (msg)=>{
     console.log("msg from function2: "+msg+"\n")
};


ee.on("mye1",fun1)
ee.on("mye1",fun2)

const cnt1=ee.listenerCount("mye1")
console.log("Count : "+cnt1)

ee.emit("mye1","msg from event 1")

ee.removeListener("mye1",fun2)
const cnt2=ee.listenerCount("mye1")
console.log("Count : "+cnt2)

