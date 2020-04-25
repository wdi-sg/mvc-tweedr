let followButton = document.getElementById('followedUser');

function clickedFollowButton () {
    followButton.innerText = 'Followed';
    followButton.style.backgroundColor = 'grey';
    followButton.style.border = '1px solid grey';

    let request = new XMLHttpRequest();

    const data = {
        userId: request.cookies['userId'],
        followedUserId: followButton.innerText;
    }

    request.send(data)
}

followButton.addEventListener('click', clickedFollowButton);