// function c(){
//     document.getElementById('myImage').src='on.gif';
// }
// function d(){
//     document.getElementById('myImage').src='off.gif';
// }

function getA(str){
	return function(){alert("HAAAAAP");}
}
    var d=getA("heeeey");
    getA();
    var geometry=({
        area:function(radius){
            return Math.PI*radius*radius;
        },
        circumphrance:function(radius){
            return Math.PI*radius*2;
        }
       
    
    
    })();
    var x=geometry.area(3);
    alert("HEllo");
    alert(x);
    alert("hello");
var counter=(function(){
	var privCounter=0;
    function change(val){
    	privCounter+=val;
    }
    return{
    	increament:function(){
        	chage(1);
         	},
        decreament:function(){
        	change(-1);
           },
		value:function(){
        	return privCounter;
            }
    }
})();
var counter=(function(){
	var privCounter=0;
    function change(val){
    	privCounter+=val;
    }
    let myObject={};
     privMethod=function(){}
    return{
    	increament:function(){
        	chage(1);
         	},
        decreament:function(){
        	change(-1);
           },
		value:function(){
        	return privCounter;
            }
    }
})();


counter.increament();
counter.increament();
alert(counter.value());
alert(counter.value);