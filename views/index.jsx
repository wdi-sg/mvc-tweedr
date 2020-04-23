var React = require("react");

class Home extends React.Component {
  render() {
    const isLoggedIn = this.props.loggedIn ?'loggedIn':'loggedOut'
    console.log(this.props.result)
    const allTweets = this.props.result;
    const tweets = allTweets.map(tweet =>{
      return<p>{tweet.name}<br/>{tweet.content}</p>
    })
    return (
      <html>
        <head />
        <body>
          <h1>Tweedr</h1>
          <p>{isLoggedIn}</p>
          {tweets}
        </body>
      </html>
    );
  }
}

module.exports = Home;
