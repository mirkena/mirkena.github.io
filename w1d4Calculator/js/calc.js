
function calctip(){
    var x=document.getElementById("subtotal").value;
    var y=document.getElementById("tip").value;
    var t=100;
    const z=Number(x)*(Number(y)/Number(t));
    const c=Number(x)+Number(z);
    document.getElementById("result").innerHTML=z;
    document.getElementById("total").innerHTML=c;
}