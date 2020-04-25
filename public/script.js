console.log("script running");

let toggleLike = (event) => {

  var request = new XMLHttpRequest();
  function responseHandler() {
    console.log("response text: ", this.responseText);
    let responseObj = JSON.parse(this.responseText);
    console.log(responseObj);
    if (responseObj.like.islike === true) {
      event.target.src = '/svg/heart_red.svg';
    } else {
      event.target.src = '/svg/heart.svg';
    }
    console.log("next sibling: ", event.target.nextSibling);
    let likeCountSpan = event.target.nextSibling;
    likeCountSpan.innerText = responseObj.likeCount;
  }
  request.addEventListener("load", responseHandler);
  let link = "/likes";
  request.open("POST", link);
  request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  // console.log(event.target);
  // console.log("event target id: ", event.target.getAttribute("tweetid"));
  let tweetId = parseInt(event.target.getAttribute("tweetid"));
  let data = {
    tweet_id: tweetId,
  };
  console.log(data);
  request.send(JSON.stringify(data));
};

let initButton = () => {
  let heartButtonArr = document.getElementsByClassName("heart");
  for (let i = 0; i < heartButtonArr.length; i++) {
    heartButtonArr[i].addEventListener("click", toggleLike);
  }
};

initButton();
