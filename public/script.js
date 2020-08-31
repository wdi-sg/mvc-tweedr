let checkForInput = function (event) {
    let postButton = document.querySelector('.profile > .tweet > form > .btn');

    if (this.value.length > 0) {
        postButton.disabled = false;
    } else {
        postButton.disabled = true;
    }
}

let tweetContent = document.querySelector('.profile > .tweet > form > .content');

tweetContent.addEventListener('keyup', checkForInput);