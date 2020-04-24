var React = require("react");

class Home extends React.Component {
  render() {
    const icon = <img src="./images/twitter.svg" className='icon'></img>

    let user;

    let tweet;

    if (this.props.loggedIn === 'true') {
        const username = this.props.username;
        const userID = this.props.userID;

        user = <p>@{username}</p>

        const url = `/tweet/${userID}`
        tweet = (
            <div className="new-tweet">
                <form action={url} method='post'>
                    <input type="text" name="tweet" placeholder="What's happening?"></input>
                    <input type="submit" value="tweet"></input>
                </form>
            </div>
                )
    }

    const tools = (
                <div className="tools">
                    <a href="#">Following</a>
                    <a href="#">Followers</a>
                    <a href="#">Likes</a>
                </div>
                    )

    const allTweets = this.props.tweets;
    console.log(allTweets);

    const showAllTweets = allTweets.map(el => {
        const profileURL = `/profile/${el.users_id}/${el.username}`
        return(
            <div className="tweet-body">
                <p className='tweet-content'>{el.tweet}</p>
                <a className='tweet-user' href={profileURL}>@{el.username}</a>
            </div>
            )
    })

    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
            <link rel="stylesheet" type="text/css" href="./css/home.css" />
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </head>
        <body>
            <div className="header">
                <h1>TWEEDR</h1>
                {icon}
                {user}
            </div>
            {tools}
            <div className="main-body">
                {tweet}
                {showAllTweets}
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;