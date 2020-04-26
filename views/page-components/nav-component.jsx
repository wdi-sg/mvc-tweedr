const React = require('react');

const nav = () => {
    return (
        <div className="nav">
            <a href="/tweets/" className="nav__link explore-link">Tweets</a>
            <a href="/users/user" className="nav__link user-profile-link">My Profile</a>
        </div>
    )
}

export default nav;