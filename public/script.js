var favoriteButton = (event) => {
  // what to do when we recieve the request
  var responseHandler = function() {
    console.log("response text", this.responseText);
    console.log("status text", this.statusText);
    console.log("status code", this.status);

  };
  event.target.style.visibility = "hidden";
  // make a new request
  var request = new XMLHttpRequest();

  // listen for the request response
  request.addEventListener("load", responseHandler);

    let data = {
      "tweetId": event.target.value
    }
  // ready the system by calling open, and specifying the url
  request.open("POST", "/favorite");
  request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  // send the request
  request.send(JSON.stringify(data));
}

let allButtons = document.getElementsByClassName("favorite");
for(let i=0; i<allButtons.length; i++){
  allButtons[i].addEventListener("click", favoriteButton);
}