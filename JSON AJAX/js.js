const mirkRequest = new XMLHttpRequest();
mirkRequest.onload = function () {
    if(this.status===200){
        try{
            var x=JSON.parse(mirkRequest.responseText);
            alert(x[0].name);
            console.log(x);
        }catch(e){
            console.warn("from Try Catch File Not recieved");
        }
    }else{
        console.warn("Not recieved");
    }
    

    console.log(x);
};
mirkRequest.open("get", "try.json");
mirkRequest.send();