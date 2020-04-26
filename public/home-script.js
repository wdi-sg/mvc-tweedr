const userId = document.getElementById("userId").value;

const faveBtns = document.querySelectorAll('.faveTweetBtn');
const faveBtnHandler = (e) => {
    const tweetId = e.target.value
    const request = new XMLHttpRequest();
    const url = `/favourites`;

    const whenRequestDone = () => {
          e.target.style.display = "none";
          const response = JSON.parse(request.responseText);
    }


    request.addEventListener('load', whenRequestDone);
    request.open("POST", url)
    const data = {
        tweet_id: tweetId,
        user_id: userId
    }
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify(data))

};


//Add event listeners for each button
faveBtns.forEach(btn => {
    btn.addEventListener("click", faveBtnHandler);
});


console.log(`Script.js is working`)