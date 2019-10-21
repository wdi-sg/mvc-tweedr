var React = require("react");

class Tweets extends React.Component {
  render() {
      console.log("tweets" this.props.tweets);
    return (
      <html>
        <head />
        <body>
          <h3>All Tweets</h3>
          <ul>
              {this.props.tweets.map(tweet => (

                      <li>{tweet.post}</li>

              ))}
          </ul>
        </body>
      </html>
    );
  }
}

module.exports = Tweets;