
//console.log("enetring script");
 let btnClick = () => {
     let userIdValue = document.getElementById('user_id').value;
     //console.log(userIdValue);
     let tweetIdValue = document.getElementById('tweet_id').value;
     const data = {
         user_id: userIdValue,
         tweet_id: tweetIdValue
     }
     var request = new XMLHttpRequest();   // new HttpRequest instance

     request.addEventListener("load", function(){

       console.log("DONE");
       console.log( this.responseText );
       Button.parentNode.removeChild(Button);
     });

     request.open("POST", '/favorite');
     request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

     request.send(JSON.stringify(data));
 }
 let Button = document.getElementById('button');

 Button.addEventListener('click', btnClick);



/*var btnClick = function(event){
      console.log("BUTTON CLIKED: DOG ID")
      var text = document.getElementById('input');
      var text_tweet = document.getElementById('input');

      //text.value = ;
      console.log(text.value)

      var request = new XMLHttpRequest();
      var responseHandler = function() {
            console.log("response text", this.responseText);
            button.parentNode.removeChild(button);

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


/*
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
    user_ids : event.target.innerText,

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


//

var React = require('react');

class FavoriteNew extends React.Component {
  render() {

    const idList = this.props.tweets.map((tweet)=>{
        return (<li>
                <p>
                    {tweet_id.tweet}
                    <form action="/favorite" method="POST">
                        <input name="tweet" value={tweet_id.tweet}/>
                        <input type="submit"/>
                    </form>
                        <button class="btn">{user_id.id}</button>

                </p>
            </li>);
    })

    return (
      <html>
        <body>
          <h1>songs</h1>
          <ul>
            {idList}
          </ul>
          <script src="script.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = FavoriteNew;
*/