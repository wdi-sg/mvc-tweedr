console.log("HBD");
console.log(document.cookie);
var trySplit = document.cookie.split("; ");
console.log(trySplit);
var username = trySplit[0].substring(9);


var favBtnClick = function(event){

  console.log(event.target.innerText)
  console.log(event.target.value);

  // make a new request
  var request = new XMLHttpRequest();
  // listen for the request response
  // what to do when we recieve the request
  if(event.target.innerText==="Add to Favorite")
  {
  var responseHandler = function() {
    console.log("response text", this.responseText);

    // check to make sure if the request went ok
    //event.target.style="display:none";
    event.target.innerText = "Remove from Favorite";
    // var data = JSON.parse(this.responseText);
  };

  request.addEventListener("load", responseHandler);
  // ready the system by calling open, and specifying the url
  // request.open("GET", "https://swapi.co/api/people/1");
  // request.open("GET", "http://api.tvmaze.com/search/shows?q=girls");
  // request.open("GET", "http://localhost:3000/api/dogs/1");
  // send the request
  // request.send();
  var data = {
    tweet_id : event.target.value,
    username : username

  };
console.log(data);
  request.open("POST", '/favorite');
  request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  request.send(JSON.stringify(data));
  return
}
 else
  {
  var responseHandlerAlternate = function() {
    console.log("response text", this.responseText);

    // check to make sure if the request went ok
    //event.target.style="display:none";
    event.target.innerText = "Add to Favorite";
    // var data = JSON.parse(this.responseText);
  };

  request.addEventListener("load", responseHandlerAlternate);
  // ready the system by calling open, and specifying the url
  // request.open("GET", "https://swapi.co/api/people/1");
  // request.open("GET", "http://api.tvmaze.com/search/shows?q=girls");
  // request.open("GET", "http://localhost:3000/api/dogs/1");
  // send the request
  // request.send();
  var data = {
    tweet_id : event.target.value,
    username : username

  };
console.log(data);
  request.open("POST", '/favorite?_method=delete');
  request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  request.send(JSON.stringify(data));
}

}

var buttons = document.querySelectorAll('.favorite');

console.log ("username is "+ username);
for( var i=0; i<buttons.length; i++){
  var button = buttons[i]
  button.addEventListener('click', favBtnClick)
}