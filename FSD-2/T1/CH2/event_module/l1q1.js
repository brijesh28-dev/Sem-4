const EE = require("events")
const ee=new EE()

ee.on("start",()=>{
    console.log("start event")
})
ee.emit("start")

ee.on("start",(s,e)=>{
    console.log(`started from ${s} to ${e}`)
})
ee.emit("start",1,100)