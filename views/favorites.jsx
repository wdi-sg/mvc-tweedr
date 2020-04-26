var React = require("react");

class Favorites extends React.Component {
    render() {
        const favoriteTweeds = this.props.result.map((favorite) => {
            let linkId = favorite.user_id;
            let profileLink = "/user_profile/" + linkId;
            return (
                <div>
                    <li
                        style={{
                            fontSize: "23px",
                            fontFamily: "Pathway Gothic One, sans-serif",
                        }}
                    >
                        {favorite.tweed} <br />
                        <br />
                        <a href={profileLink}>
                            <span style={{ fontSize: "20px", color: "grey" }}>
                                by {favorite.user_name}
                            </span>
                        </a>
                        <hr />
                    </li>
                </div>
            );
        });

        return (
            <html>
                <head>
                    <link rel="stylesheet" href="/style.css" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&family=Pathway+Gothic+One&family=Patua+One&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        rel="stylesheet"
                        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                        crossOrigin="anonymous"
                    />
                </head>
                <body>
                    <div className="tweed-container">
                        <div className="jumbotron">
                            <h1 className="display-4">TWEEDER</h1>
                            <p className="lead">Tweed Yo Mind</p>

                            <hr className="my-4" />
                            <form
                                method="POST"
                                action="/logout/?_method=delete"
                            >
                                <button
                                    type="submit"
                                    className="btn btn-secondary logout"
                                >
                                    Logout
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="tweed-header-input">
                        <div className="tweed-head">
                            <h3>Favorite Tweeds</h3>
                        </div>
                        <div className="tweed-input-field">
                            <ul className="tweed-display-container">
                                {favoriteTweeds}
                            </ul>
                        </div>
                    </div>
                    <script src="/script.js"></script>
                </body>
            </html>
        );
    }
}

module.exports = Favorites;
