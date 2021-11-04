// function c(){
//     document.getElementById('myImage').src='on.gif';
// }
// function d(){
//     document.getElementById('myImage').src='off.gif';
// }

var emp2= (function(){
    emp.extension = function () {
        var address;
       emp.setAddres = function setAddress(newAddress){
            address = newAddress;
        }
        emp.getAddres = function getAddress(){
            return address;
        }
        };
        return emp;
    })( );
    

console.log(emp2);


    
       
