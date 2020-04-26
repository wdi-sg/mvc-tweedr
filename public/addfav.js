let addFavButton = document.getElementById('addfavbutton');

let addFavHandler = () => {
    let userIdValue = document.getElementById('user_id').value;
    let tweetIdValue = document.getElementById('tweet_id').value;
    const data = {
        user_id: userIdValue,
        tweet_id: tweetIdValue
    }
    var request = new XMLHttpRequest();   // new HttpRequest instance

    request.addEventListener("load", function(){

      console.log("DONE");
      console.log( this.responseText );
      addFavButton.parentNode.removeChild(addFavButton);
    });

    request.open("POST", '/favorite');
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    request.send(JSON.stringify(data));
}

addFavButton.addEventListener('click', addFavHandler);