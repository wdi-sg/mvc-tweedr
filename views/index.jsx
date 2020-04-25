var React = require("react");

class Home extends React.Component {
  render() {
    const isLoggedIn = this.props.loggedIn ?'loggedIn':'loggedOut'
    const allTweets = this.props.result;
    const tweets = allTweets.map(tweet =>{
      return<p>{tweet.name}<br/>{tweet.content}</p>
    })
    return (
      <html>
        <head />
        <body>
          <h1>Tweedr</h1>
          <p><a href = '/register'>Register</a></p>
          <p><a href = '/login'>Log In</a></p>
          <p id = 'tweet'><a href = '/newTweet'>New Tweet</a></p>
          <p>{isLoggedIn}</p>
          {tweets}
        </body>
      </html>
    );
  }
}

module.exports = Home;
