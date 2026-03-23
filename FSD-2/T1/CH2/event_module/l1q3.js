//1.register multiple event listners for difrent events
//2.mye1,mye2,
//3.removing a specific event listner for mye2
//4.remove all listner with mye1
//5.triger event and see wich listners are going t exicute 
const EE = require("events")
const ee = new EE()

var fun1 = (msg)=>{
     console.log("msg from function1: "+msg)
};

var fun2 = (msg)=>{
     console.log("msg from function2: "+msg+"\n")
};


ee.on("mye1",fun1)
ee.on("mye2",fun2)
ee.on("mye1",fun1)
ee.on("mye2",fun2)

ee.removeListener("mye2",fun2)
ee.removeAllListeners("mye1")

ee.emit("mye1","msg from event 1")
ee.emit("mye2","msg from event 2")