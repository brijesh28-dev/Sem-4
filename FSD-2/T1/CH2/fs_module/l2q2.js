function main(){
    let df=15;
    setInterval(()=>{
    if(df<=50){
        document.getElementById("main").style.fontSize=df+"px";
     df++;
    }
},50)
}
