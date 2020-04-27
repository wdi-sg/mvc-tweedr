console.log('hello~')

var btnClick = function(event){

  console.log("BUTTON CLIKED: fav_id")
  console.log(event.target.innerText)

  // make a new request
  var request = new XMLHttpRequest();
  // listen for the request response
  // what to do when we recieve the request
  var responseHandler = function() {
    console.log("response text", this.responseText);
    console.log("status text", this.statusText);
    console.log("status code", this.status);

    // check to make sure if the request went ok
    event.target.style="display:none";
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
    tweet_id : event.target.innerText
  };

  request.open("POST", '/fav');
  request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  request.send(JSON.stringify(data));
}

const buttonSelector = document.querySelectorAll('.addFav');

for( var i=0; i<buttonSelector.length; i++){
  var button = buttonSelector[i]
  button.addEventListener('click', btnClick)
}