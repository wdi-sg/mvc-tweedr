var React = require("react");

class CreateNewTweet extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <h1>Hello {this.props.signedInUser.name}</h1>
          <form action="/signout?_method=delete" method="POST">
            <button type="submit">Sign out</button>
          </form>
          <h3>New Tweet</h3>
          <form action="/addedtweet" method="POST">
            <input
              name="tweet"
              type="text"
              rows="5"
              placeholder="Tweet here..."
            ></input>
            <input
              type="hidden"
              name="user_id"
              value={this.props.signedInUser.id}
            ></input>
            <br />
            <button type="submit">Tweet~</button>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = CreateNewTweet;
