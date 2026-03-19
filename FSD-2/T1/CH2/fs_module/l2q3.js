let dfi=50
let dfd=50
function inc(){
setInterval(()=>{
    if(dfi<=100){
        document.getElementById("inc").style.fontSize=dfi+"px";
     dfi++;
    }
},100)
}
function dec(){
setInterval(()=>{
    if(dfd>=15){
        document.getElementById("dec").style.fontSize=dfd+"px";
     dfd--;
    }
    if(a==s){
        return;
    }
},100)
}
