var React = require("react");

class Payment extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <h3>Make payment to another user below!</h3>
          <form method="POST" action="/payment">
            <div>SENDER:</div>
            <div>@{this.props.username}</div>
            <div>Your user ID: <input type="text" name="sender_id" required/></div>
            <br />
            <div>RECIPIENT:</div>
            <div>User ID: <input type="text" name="recipient_id" required/></div>
            <br />
            <div>AMOUNT:</div>
            <div>SGD <input type="text" name="amount" required/></div>
            <br />
            <input type="submit" value="Submit"/>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Payment;