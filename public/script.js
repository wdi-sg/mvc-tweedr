/*var btnClick = function(event){
      console.log("BUTTON CLIKED: DOG ID")
      var text = document.getElementById('input');
      var text_tweet = document.getElementById('input');

      //text.value = ;
      console.log(text.value)

      var request = new XMLHttpRequest();
      var responseHandler = function() {
            console.log("response text", this.responseText);

      };
      request.addEventListener("load", responseHandler);
      //request.open("GET", "http://localhost:3000/api/dogs/1");

      var data = {
            user_id : text.value,
            tweet_id: text_tweet.value
      };
      console.log("data",data.user_id);
      request.open("POST", '/favorite');
      request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      request.send(JSON.stringify(data));
}

var button = document.querySelector('.btn');
button.addEventListener('click', btnClick);



//--------JSX FILE -------
var React = require('react');
 class newFavorites extends React.Component {
     render() {
        console.log("script")
         return (
            <html>
            <body>

                <h3>Add New Favorite</h3>
                <div>
                    <p>
                        User Id <input id ="input" name="user_id" type="text"/>
                    </p>
                    <p>
                        Tweet Id <input id ="input_tweet" name="tweet_id" type="text"/>
                    </p>

                    <p>

                        <button class="btn">submit</button>
                    </p>
                </div>
                <script src="./script.js"></script>

            </body>
        </html>
        );
    }
}

 module.exports = newFavorites;

*/


console.log("HELLLO");



var btnClick = function(event){
  //console.log("BUTTON CLIKED: SONG ID")
  console.log(event.target.innerText)

  // make a new request
  var request = new XMLHttpRequest();
  // listen for the request response
  // what to do when we recieve the request
  var responseHandler = function() {
    console.log("response text", this.responseText);

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
    tweet_ids : event.target.innerText
  };

  request.open("POST", '/favorite');
  request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  request.send(JSON.stringify(data));
}

var buttons = document.querySelectorAll('.btn');

for( var i=0; i<buttons.length; i++){
  var button = buttons[i]
  button.addEventListener('click', btnClick)
}