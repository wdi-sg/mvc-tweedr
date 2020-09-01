var React = require("react");

class NewTweet extends React.Component {
  render() {
    let action = "/" +this.props.user[0].username+ "/tweed/"
    let userID = parseInt(this.props.user[0].id)
    return (
      <html>
        <head />
        <body>
            <form method="POST" action={action}>
            <input type="hidden" name="userID" value={userID}/><br/><br/>
            Compose Tweet: <input type="text" name="tweet" maxlength="280"/><br/><br/>
            <input type="submit"/>
            </form>

        </body>
      </html>
    );
  }
}

module.exports = NewTweet;