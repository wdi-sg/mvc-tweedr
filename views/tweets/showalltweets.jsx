var React = require("react");

class AllTweets extends React.Component {
  render() {
    console.log("================================");
    console.log(this.props.allTweets);
    console.log("================================");

    const showAllTweets = this.props.allTweets.map((users) => {
      return (
        <p>
          {users.username} <br />
          {users.tweets} <br />
        </p>
      );
    });

    return (
      <html>
        <head />
        <body>
          <h3>All Tweets</h3>
          {showAllTweets}
        </body>
      </html>
    );
  }
}

module.exports = AllTweets;
