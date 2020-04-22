const React = require('react');

const nav = () => {
    return (
        <div className="nav">
            <a href="/users/explore" className="nav__link explore-link">Explore</a>
            <a href="/users/user" className="nav__link user-profile-link">My Profile</a>
        </div>
    )
}

export default nav;