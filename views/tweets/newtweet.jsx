var React = require("react");

class newTweet extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <h2>Hi, @{this.props.username}</h2>
          <h3>What's on your mind?</h3>
          <form method="POST" action="/newtweet">
            <div><input type="text" name="content" required/></div>
            <br />
            <input type="submit" value="Submit"/>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = newTweet;