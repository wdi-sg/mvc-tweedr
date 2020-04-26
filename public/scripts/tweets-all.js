// AJAX //

const sendHttpRequest = async (httpMethod, url, data, httpHeaders) => {

    const response = await fetch(url, {
        method: httpMethod,
        body: JSON.stringify(data),
        headers: httpHeaders
    })

    if (response.status >= 200 && response.status < 300) {
        return response.json();

    } else {

        return response.json().then(errData => {
            console.log(errData);
            throw new Error('Server-side Error.');
        })
    }
}
//

const allFavouriteBtns = document.querySelectorAll('.single-tweet__favourite-btn');

const favouriteBtnHandler = async function() {
    console.log('Favourite Btn!');

    if (this.dataset.isFavourite == "false") {
        this.innerText = 'UNFAVOURITE THIS';
        this.dataset.isFavourite = "true";

        await sendHttpRequest('POST', `/favourites/${this.dataset.tweetId}`, { tweetId: this.dataset.tweetId }, { 'Content-Type': 'application/json' });

    } else {
        this.innerText = 'FAVOURITE THIS';
        this.dataset.isFavourite = "false";

        await sendHttpRequest('DELETE', `/favourites/${this.dataset.tweetId}`, { id: this.dataset.tweetId }, { 'Content-Type': 'application/json' });
    }
}

allFavouriteBtns.forEach(btn => btn.addEventListener('click', favouriteBtnHandler));