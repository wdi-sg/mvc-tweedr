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

    return (
      <html>
        <head />
        <body>
            <div>
                <h1>TWEEDR</h1>
                {header}
            </div>
                {tweet}
            <div>

            </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;