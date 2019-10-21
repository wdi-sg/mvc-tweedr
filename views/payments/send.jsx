const React = require("react");
const Nav = require("../ui/nav")

class New extends React.Component {
  render() {
    let msg = "";
    if (this.props.sentPayment) {
      msg = (
        <React.Fragment>
          <h3>{this.props.message}</h3>
          <ul>
            <li>My user_id: {this.props.paymentSent[0].sender_id}</li>
            <li>I have sent ${this.props.paymentSent[0].amount}</li>
            <li>to someone with user_id: {this.props.paymentSent[0].recipient_id}</li>
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
          <form action="/payments" method="POST">
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
