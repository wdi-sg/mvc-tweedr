const React = require("react");
const Nav = require("../ui/nav")

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
          <Nav />
          {msg}
          <h3>Send Payment</h3>
          <form action="/payments/send" method="POST">
            <input type="number" placeholder="enter amount"/>
            <br />
            <input type="submit" value="send payment" />
          </form>
        </body>
      </html>
    );
  }
}

module.exports = New;
