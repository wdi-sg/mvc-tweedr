var React = require("react");

class Home extends React.Component {
  render() {
    let header;

    let tweet;

    if (this.props.loggedIn === 'true') {
        const username = this.props.username;
        const userID = this.props.userID;

        header = <p>{username}</p>

        const url = `/tweet/${userID}`
        tweet = (
            <form action={url} method='post'>
                <input type="text" name="tweet" placeholder="What's happening?"></input>
                <input type="submit" value="tweet"></input>
            </form>
                )
    }
    else{
        header = (
                <div>
                    <a href="/login">Login</a>
                    <a href="/register">Don't have an account?</a>
                </div>
            )
    }

    const allTweets = this.props.tweets;
    console.log(allTweets);

    const showAllTweets = allTweets.map(el => {
        return(
            <div className="tweet-body">
                <p className='tweet-content'>{el.tweet}</p>
                <p className='tweet-user'>-{el.username}</p>
            </div>
            )
    })

    return (
      <html>
        <head>
            <link rel="stylesheet" type="text/css" href="./css/home.css" />
        </head>
        <body>
            <div>
                <h1>TWEEDR</h1>
                {header}
            </div>
                {tweet}
            <div className="all-tweet-body">
                {showAllTweets}
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;