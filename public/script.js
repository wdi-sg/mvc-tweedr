let favoriteButton = document.querySelector(".favorite-button");
console.log(favoriteButton);

let hideButton = () => {
    favoriteButton.style.display = "none";
    console.log("It is supposed to work");
};

favoriteButton.addEventListener("click", hideButton);

// // what to do when we recieve the request
// var responseHandler = function() {
//   console.log("response text", this.responseText);
//   console.log("status text", this.statusText);
//   console.log("status code", this.status);

// };

// // make a new request
// var request = new XMLHttpRequest();

// // listen for the request response
// request.addEventListener("load", responseHandler);

// // ready the system by calling open, and specifying the url
// //var url = "http://localhost:4000/tweeds";
// request.open("GET", url);

// // send the request
// request.send();

var today = new Date();
var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
//var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date;

console.log(dateTime);

let dateAndTime = document.createElement("p");
dateAndTime.innerText = dateTime;
let jumbotron = document.querySelector(".jumbotron");
jumbotron.appendChild(dateAndTime);
