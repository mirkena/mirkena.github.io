var accountInfoList=[];
var myAccModule=(function(){
    var account={
        accountName: "",
        deposite: 0
    };
    var createAccount=function(accountName, deposite) {
        var newAcc=Object.create(account);
         newAcc.accountName=accountName;
         newAcc.deposite=deposite;
         return newAcc;
    };
    return {
        createAccount:createAccount
    };

})();

window.onload=function(){
    var createAcc=document.getElementById("createAcc");
    createAcc.onclick=onAddAccountClicked;
};
function onAddAccountClicked(){
    let accountNameElement=document.getElementById("name");
    let depositeElement=document.getElementById("deposit");
    const accountName=accountNameElement.value.trim();
    const deposite=depositeElement.value.trim();

    if(accountName===""||deposite===""){
        alert("Please enter account name and deposite");
        return;
    }
    var newAcc=myAccModule.createAccount(accountName,deposite);
    accountInfoList.push(newAcc);
    let mytextarea=document.getElementById("out");
    mytextarea.value="";
    for(let i=0;i<accountInfoList.length;i++){
       mytextarea.value +="\n Account name: "+accountInfoList[i].accountName
           +" Balance: "+accountInfoList[i].deposite;
    }

}