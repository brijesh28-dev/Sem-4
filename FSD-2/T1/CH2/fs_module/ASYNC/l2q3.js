// write a pogram to copy data from one to onether file data fatch from source.txt and gave to destnation.txt and at the end read data from desination and perform in ASYNC
var fs=require("fs")
fs.writeFile("source.txt","Data in Source file ",(error)=>{
    if(error) throw error;
    console.log("write action performed in source file")

        fs.readFile("source.txt","utf-8",(error,data)=>{
        if(error) throw error;
        console.log("read from source file  performed")

                fs.writeFile("destination.txt",data,(error)=>{
                    if(error) throw error;
                    console.log("write action performed in destination file")

                            fs.readFile("destination.txt","utf-8",(error,data)=>{
                        if(error) throw error;
                        console.log("read from destination file performed")
                        console.log(data)
                           })  
                    
                  })
       
         })

})
