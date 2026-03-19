// write a text " U R Creatting a File " To help.txt ;
//  append the txt " U R Appending a Data " at help.txt then read and print in consol and then print the line "Thnx for using my program"
var fs=require("fs")
fs.writeFile("help.txt","U R Creatting a File",(error)=>{
    if(error) throw error;
    console.log("write action performed in help.txt file")

        fs.appendFile("help.txt","\nU R Appending a Data",(error)=>{
            if(error) throw error;
            console.log("append file done")

                fs.readFile("help.txt","utf-8",(error,data)=>{
                    if(error) throw error;
                    console.log(data)
                    console.log("Thnx for using my program")
                    
                })
        })
})
