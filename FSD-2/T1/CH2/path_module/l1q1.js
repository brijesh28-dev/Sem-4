var os=require("path")

path=os.dirname("C:\Users\kachh\OneDrive\Desktop\Sem-4\FSD-2")
console.log(path)

path=os.basename("C:\Users\kachh\OneDrive\Desktop\Sem-4\FSD-2")
console.log(path)   

path=os.extname("C:\Users\kachh\OneDrive\Desktop\Sem-4\FSD-2")
console.log(path)

path=os.parse("C:\Users\kachh\OneDrive\Desktop\Sem-4\FSD-2")
console.log(path)

        if(path.ext ==".txt"){
            console.log("Text Documant")
        }else{
            console.log("Not a Text Document")
        }