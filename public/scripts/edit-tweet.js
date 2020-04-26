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

addHashtagBtn.addEventListener('click', async () => {

    //ID of hashtag-option that is currently selected
    const hashtagOptionIndex = document.querySelector('.edit-form__hashtags-list-select').selectedIndex;
    const addHashtagId = (document.querySelectorAll('.hashtag-option')[hashtagOptionIndex].getAttribute("hashtag-id"));


    const response = await sendHttpRequest('POST', `/hashtags-tweets/${addHashtagBtn.dataset.tweetId}/${addHashtagId}`, {
        hashtagId: addHashtagId
    }, { 'Content-Type': 'application/json' });

    console.log(response.rows);

    hashtagsList.insertAdjacentHTML('beforeend',
        `         <div class="edit-form__hashtag-wrapper">
                    <li data-hashtag-tweet-id=${response.rows[0].id} class="edit-form__hashtags-list-item">
                        ${document.querySelectorAll('.hashtag-option')[hashtagOptionIndex].value}
                    </li>
                    <button type="button" data-hashtag-tweet-id=${response.rows[0].id} class="edit-form__hashtags-list-item-delete-btn">Delete</button>
                </div>`);

    const addedHashtagDeleteBtn = document.querySelector('.edit-form__hashtag-wrapper:last-of-type>.edit-form__hashtags-list-item-delete-btn');

    addedHashtagDeleteBtn.addEventListener('click', deleteBtnHandler.bind(addedHashtagDeleteBtn, addedHashtagDeleteBtn.dataset.tweetId, addedHashtagDeleteBtn.dataset.hashtagId, addedHashtagDeleteBtn.dataset.hashtagTweetId));

})

const deleteHashtagBtns = document.querySelectorAll('.edit-form__hashtags-list-item-delete-btn');

const deleteBtnHandler = async function(tweetId, hashtagId, hashtagTweetId) {
    const response = await sendHttpRequest('DELETE', `/hashtags-tweets/${tweetId}/${hashtagId}/delete`, { id: hashtagTweetId }, { 'Content-Type': 'application/json' });

    this.parentNode.innerHTML = null;

}

deleteHashtagBtns.forEach(btn => {
    btn.addEventListener('click', deleteBtnHandler.bind(btn, btn.dataset.tweetId, btn.dataset.hashtagId, btn.dataset.hashtagTweetId))
})