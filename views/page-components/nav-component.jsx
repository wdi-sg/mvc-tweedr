const React = require('react');

const nav = () => {
    return (
        <div className="nav">
            <a href="/tweets/" className="nav__link explore-link">Tweets</a>
            <a href="/tweets/new" className="nav__link new-tweet">New Tweet</a>
            <a href="/hashtags/" className="nav__link hashtagst">#</a>
        </div>
    )
}

export default nav;