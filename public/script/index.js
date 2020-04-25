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

favButtons.forEach(e => {
    e.addEventListener('click', favBtnClick);
})

function favBtnClick() {
    const btn = event.target.className.split(' ')[1];
    const input = document.querySelectorAll(`.${btn}`)[0];
    const inputValue = input.value;

    const data = {"tweetID" : inputValue}

    var request = new XMLHttpRequest();   // new HttpRequest instance

    request.open("POST", '/favouritetweet');

    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    request.send(JSON.stringify(data));
}