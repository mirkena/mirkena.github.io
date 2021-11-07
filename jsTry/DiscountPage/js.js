$(document).ready(function () {
    $(".guess_box").hover(
        function () {
            
            $(this).addClass("my_hover");
        },
        function () {
           
            $(this).removeClass("my_hover");
        });
    $(".guess_box").click(checkForCode);
    function getRandom(num) {
        var my_num = Math.floor(Math.random() * num);
        return my_num;
    }
    var hideCode = function () {
        var numRand = getRandom(4);

        $(".guess_box").each(function (index,value) {
            if (numRand == index) {
                 
                $(this).append("<span id='has_discount'></span>");
                 
            }
        });
    }
    hideCode();
    function checkForCode() {
        var discount;
        if ($.contains(this, document.getElementById("has_discount"))) {
            $(this).removeClass("my_hover");
            var my_num = getRandom(100);
            discount = "<p>Your Code: CODE"   +    my_num+ "</p>";
        } 
        $(this).append(discount);
        $(".guess_box").each(function () {
            if ($.contains(this, document.getElementById("has_discount"))) {
                $(this).addClass("discount");
            } else {
                $(this).addClass("no_discount");
            }
            $(this).unbind();
        });
        //$("#result").append(discount);
    }
    
})

// function checkForCode() {
//     //$(".guess_box p").remove();
//     var discount = getRandmom(4);
//     var discount_msg = "<p>Your Discount is " + discount + "%</p>";
//     // alert(discount_msg);
//     $(this).append(discount_msg);
//     //$(this).unbind("click");
//     $(".guess_box").each(function () {
//         $(this).unbind('click');
//     });

// };
// function getRandmom(num){
//     var my_num = Math.floor(Math.random()*num);
// return my_num;
// }
// function welcome(name){
//     alert("Welcome "+name);
// }
// function multiply(num1,num2){
//     return num1*num2
// }
// var calc=multiply(2,3);