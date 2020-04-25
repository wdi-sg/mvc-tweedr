console.log('script is working')

/********************
======================
Upload image
======================
*********************/
const input = document.querySelector('.profile-pic');
const inputDiv = document.querySelector('.input-picture');

input.style.opacity = 0;

input.addEventListener('change', updateImageDisplay);

function updateImageDisplay(){
    while(inputDiv.firstChild) {
        inputDiv.removeChild(inputDiv.firstChild);
    }
    console.log(input.files);
    const curFiles = input.files;

    if(curFiles.length != 0){
        const image = document.createElement('img');
        image.src = URL.createObjectURL(curFiles[0]);
        image.style['max-height'] = '150px';
        image.style['max-width'] = '150px';
        inputDiv.appendChild(image);
    }
}



/********************
======================
Favourites button
======================
*********************/

const favButtons = document.querySelectorAll('.fav-btn');
const unfavButtons = document.querySelectorAll('.unfav-btn');

favButtons.forEach(e => {
    e.addEventListener('click', favBtnClick);
})

unfavButtons.forEach(e => {
    e.addEventListener('click', favBtnClick);
})

function favBtnClick() {
    const favBtnClass = event.target.className.split(' ')[0];
    const input = document.querySelectorAll(`.${favBtnClass}`)[0];
    const inputValue = input.value;

    const data = {"tweetID" : inputValue}

    if (event.target.className.split(' ')[1] === 'fav-btn') {
        // AJAX
        var request = new XMLHttpRequest();   // new HttpRequest instance

        request.open("POST", '/favouritetweet');

        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        request.send(JSON.stringify(data));

        // Change heart shape to like
        const favBtn = document.querySelectorAll(`.${favBtnClass}`)[1];
        favBtn.setAttribute('src', './images/fav.svg');
        favBtn.classList.remove("fav-btn");
        favBtn.classList.add("unfav-btn");
    }
    else if(event.target.className.split(' ')[1] === 'unfav-btn'){
         // AJAX
        var request = new XMLHttpRequest();   // new HttpRequest instance

        // request.open("POST", '/unfavouritetweet/?_method=delete');
        request.open("POST", `/unfavouritetweet/${inputValue}/?_method=delete`);

        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        // request.send(JSON.stringify(data));
        request.send();

        // Change heart shape to unlike
        const favBtn = document.querySelectorAll(`.${favBtnClass}`)[1];
        favBtn.setAttribute('src', './images/nofav.svg');
        favBtn.classList.remove("unfav-btn");
        favBtn.classList.add("fav-btn");
        console.log(favBtn);
    }
}