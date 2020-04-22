var React = require("react");

class Home extends React.Component {
  render() {
    let allTweets = this.props.tweets.map(tweet => {
        return <li>{tweet.message}</li>
    });
    return (
      <html>
        <head />
        <body>
          <h1>All tweets</h1>
          <ul>
            {allTweets}
          </ul>
        </body>
        <div>
          <a href="/tweet">Tweet a message!</a>
        </div>
      </html>
    );
  }
}

module.exports = Home;