var React = require("react");

class New extends React.Component {
  render() {
    let msg = "";
    if (this.props.addedNewTweet) {
      msg = (
        <React.Fragment>
          <h3>{this.props.message}</h3>
          <ul>
            <li>{this.props.newTweet[0].content}</li>
            <li>@{this.props.user_name}</li>
          </ul>
        </React.Fragment>
      );
    }
    return (
      <html>
        <head />
        <body>
          {msg}
          <h3>Add New Tweet</h3>
          <form action="/tweets" method="POST">
            <textarea name="content" rows="5" cols="40" />
            <br />
            <input type="submit" value="tweet" />
          </form>
        </body>
      </html>
    );
  }
}

module.exports = New;
