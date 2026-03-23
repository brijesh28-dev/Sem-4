//1.when a "conection" event occur print("connection successfully") and triger 
//2."datarecive" event event occur print("datarecived successfully") and triger
//finaly print thnx
const EE=require("events")
const ee=new EE()

ee.on("conection",()=>{
    console.log("connection successfully")
    ee.emit("datarecive")
    
})
ee.on("datarecive",()=>{
        console.log("datarecived successfully")
        console.log("thnx")
    })
ee.emit("conection")