
function rand() {
    return Math.floor((Math.random()*3));
}
document.getElementById("submit").onclick(function(){
    var x=rand();
    for(let i=1;i<=2;i++){
        if(i==x) continue;
        document.getElementById("i").style.visibility = "hidden";
    }
    
})
