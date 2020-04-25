// Make AJAX call to get all hashtags
//Map hashtag values into options els
//Create selects with hashtag options and append upon clicking 'add', remove upon clicking 'delete'

const hashtagsSelect = document.querySelector(".hashtags-select");
const hashtagOptions = document.querySelectorAll(".hashtags-select>option");

const addHashtagBtn = document.querySelector(".add-form__add-hashtag-btn");
const deleteHashtagBtn = document.querySelector(".add-form__delete-hashtag-btn");

addHashtagBtn.addEventListener('click', () => {
    const newHashtagsSelect = hashtagsSelect.cloneNode(true);

    document.querySelector(".add-form__add-hashtag-wrapper").appendChild(newHashtagsSelect);
})

deleteHashtagBtn.addEventListener('click', () => {
    const allHashtagsSelects = document.querySelectorAll('.hashtags-select');

    document.querySelector('.add-form__add-hashtag-wrapper').removeChild(allHashtagsSelects[allHashtagsSelects.length - 1]);
})