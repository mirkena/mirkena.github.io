var checkBox;
var textArea;
var buttons;
var tempFont=12;
var timer=null;

function alerts(){
    //alert("Hello, world!");
     
    // document.getElementById("textarea").style.color="red";
    // document.getElementById("textarea").style.backgroundColor="lightyellow"

}
function decohelp(){
    
    checkBox=document.getElementById("bling");
    checkBox.onclick=deco;
    textArea=document.getElementById("textareas");
    //fsize = window.getComputedStyle(document.getElementById("textareas").fontSize);
    buttons=document.getElementById("decor");
   buttons.onclick=changeFont;
    
    //fsize=document.getElementById("textareas").style.fontSize;
}
function changeFont(){ 
    if(timer==null){
        timer = setInterval(resize,500);
    }else{
        clearInterval(timer);
        timer==null;
    } 
}

function resize(){
    tempFont = tempFont + 2;
    document.getElementById("textareas").style.fontSize = tempFont +"pt";
}
function deco(){
    if(checkBox.checked==true){
        alert("Hello Bling");
        textArea.style.fontWeight="strong";
        textArea.style.color="green";
        textArea.style.textDecoration="underline";
        document.getElementById("bod").style.backgroundImage="url('./image/image.jpg')";

    }else{
        textArea.style.fontWeight="normal";
        textArea.style.color = "red";
        textArea.style.textDecoration="none";
    }
   
}
// $('#decor').click(function() {
//     curSize = parseInt($('#txtarea').css('font-size')) + 2;
//     if (curSize <= 32)
//         $('#content').css('font-size', curSize);
// });
window.onload=decohelp;
