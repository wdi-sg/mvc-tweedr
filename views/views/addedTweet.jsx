var React = require("react");

class AddedTweet extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <h3>Your new tweet is added</h3>
          <p>{this.props.tweet}</p>
        </body>
      </html>
    );
  }
}

module.exports = AddedTweet;
