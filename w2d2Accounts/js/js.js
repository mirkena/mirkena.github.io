var Factory = function () {
    this.createAccount = function (type,balance) {
        var account;

        if (type === "bussiness") {
            account = new Saving(balance);
        } else if (type === "saving") {
            account = new Checking(balance);
        } else if (type === "checkin") {
            account = new Bussiness(balance);
        } 

        account.type = type;
        account.balance=balance;

        account.say = function () {
            alert(this.type + ": Account Name " + this.balance + "Balance");
        }

        return account;
    }
}

var Saving = function (balance) {
    this.balance = balance;
};

var Checking = function () {
    this.balance = balance;
};

var Bussiness = function () {
    this.balance = balance;
};



function run() {

    var accounts = [];
    var factory = new Factory();

    accounts.push(factory.createAccount("Saving"));
    accounts.push(factory.createAccount("Checking"));
    accounts.push(factory.createAccount("Bussiness"));

    for (var i = 0, len = accounts.length; i < len; i++) {
        accounts[i].say();
    }
}
var typtxt="Saving";
var baltxt=25;
var btn;
var outpt;
function passAcc(){
    typtxt=document.getElementById("name");
    baltxt=document.getElementById("deposit");
    btn=document.getElementById("createAcc");
    outpt=document.getElementById("out");
    btn.onclick=account.say;
   
}
function startAcc(){
    outpt.innerHTML="hello"
}
window.onload=passAcc;