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

// make a new request
window.onload = (event) => {
  console.log('page is fully loaded');
  // make a new request
  var responseHandler = function() {
  const favoriteTweetId = JSON.parse(this.responseText) ;
  console.log (favoriteTweetId);
  //console.log("status text", this.statusText);
  //console.log("status code", this.status);
  var buttons = document.querySelectorAll('.favorite');


for( var i=0; i<buttons.length; i++){
  var button = buttons[i]
  //console.log(button.value);
  //console.log(button.innerText);
  for( var tweetCount=0; tweetCount < favoriteTweetId.length; tweetCount++)
  {
    //console.log("favorite tweet is" + favoriteTweetId[tweetCount].tweets_id);
    //console.log("button value is "+button.value);
    if( parseInt(button.value)===parseInt(favoriteTweetId[tweetCount].tweets_id))
    {

        button.innerText="Remove from Favorite";
    }
  }
  //button.addEventListener('click', favBtnClick)
}
};
var request = new XMLHttpRequest();
request.addEventListener("load", responseHandler);
request.open("POST", "/check");
console.log(request);
 var data = {
    username : username

  };
request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  request.send(JSON.stringify(data));
};