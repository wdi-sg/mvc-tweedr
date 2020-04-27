console.log('in the script')

const followButton = document.querySelector('.user');

const clickedFollowButton = () => {
    followButton.innerText = 'Followed';
    followButton.className = 'user btn btn-secondary';
    followButton.style.backgroundColor = 'grey';
    followButton.style.color = 'white';
}

followButton.addEventListener('click', clickedFollowButton);