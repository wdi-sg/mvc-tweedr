var React = require("react");

class All extends React.Component {
  render() {
      console.log("***** this.props.allTweets *****\n",this.props.allTweets);
    return (
      <html>
        <head />
        <body>
          <h3>All Tweets</h3>
          <ul>
              {this.props.allTweets.map(tweet => (
                  <React.Fragment>
                      <li>{tweet.content}</li>
                  </React.Fragment>
              ))}
          </ul>
        </body>
      </html>
    );
  }
}

module.exports = All;
