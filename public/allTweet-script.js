// what to do when we recieve the request
var buttonClick = function (event) {
  var responseHandler = function () {
    // console.log("response text", this.responseText);
    console.log("status text", this.statusText);
    console.log("status code", this.status);
    var likeButton = document.querySelector(".like");
    likeButton.style = "display:none";
    const thankYouMsg = document.createElement("p");
    thankYouMsg.innerText = "Thank you for liking this tweet~";
    document.querySelector(".eachTweet").appendChild(thankYouMsg);
  };
  var request = new XMLHttpRequest();
  request.responseType = "json";
  // listen for the request response
  request.addEventListener("load", responseHandler);

  // ready the system by calling open, and specifying the url
  var url = "http://127.0.0.1:3000/alltweets";
  request.open("GET", url);

  // send the request
  request.send();
};

var button = document.querySelector(".like");
button.addEventListener("click", buttonClick);
