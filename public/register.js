var responseHandler = function() {
    if (registerStatus === "failed") {
        document.querySelector('.message-box').innerHTML = JSON.parse(this.responseText).fail;
    } else if (registerStatus === "register") {
        document.querySelector('.message-box').innerHTML = JSON.parse(this.responseText).register;
    };
};

var request = new XMLHttpRequest();
request.addEventListener("load", responseHandler);
var url = "/register/status";
request.open("GET", url);
request.send();
