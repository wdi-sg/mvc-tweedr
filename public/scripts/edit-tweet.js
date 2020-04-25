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

const hashtagsList = document.querySelector('.edit-form__hashtags-list');
const addHashtagBtn = document.querySelector('.edit-form__hashtags-list-add-btn');

const hashtagItems = document.querySelectorAll('.edit-form__hashtags-list-item');

hashtagItems.forEach(item => console.log(item.dataset.hashtagTweetId));

addHashtagBtn.addEventListener('click', async () => {

    //ID of hashtag-option that is currently selected
    const addHashtagId = (document.querySelectorAll('.hashtag-option')[document.querySelector('.edit-form__hashtags-list-select').selectedIndex].getAttribute("hashtag-id"));

    // const response = await sendHttpRequest('GET', `/hashtags-tweets/${addHashtagBtn.dataset.tweetId}`);

    const response = await sendHttpRequest('POST', `/hashtags-tweets/${addHashtagBtn.dataset.tweetId}/${addHashtagId}`, {
        hashtagId: addHashtagId
    }, { 'Content-Type': 'application/json' });

    console.log(response);


})

const deleteHashtagBtns = document.querySelectorAll('.edit-form__hashtags-list-item-delete-btn');

deleteBtnHandler = () => {
    console.log('Delete');
}