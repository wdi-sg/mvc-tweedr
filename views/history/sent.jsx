const React = require("react");
const Nav = require("../ui/nav");

class All extends React.Component {
  render() {
    // console.log("***** this.props.allTweets *****\n",this.props.allTweets);
    let tweets = <p>No payment sent yet, please <a href="/payments/new">Send payment now!</a></p>;

    if (this.props.allPaymentsSent) {
      tweets = (
        <ul>
          {this.props.allPaymentsSent.map(payment => (
            <React.Fragment>
              <li key={payment.sender_id}>Sent by: {payment.sender_id}</li>
              <li key={payment.recipient_id}>Received by: {payment.recipient_id}</li>
              <li key={payment.amount}>Amount: ${payment.amount}</li>
              <hr />
            </React.Fragment>
          ))}
        </ul>
      );
    }

    return (
      <html>
        <head />
        <body>
          <Nav />
          <h3>All Payments Sent</h3>
          {tweets}
        </body>
      </html>
    );
  }
}

module.exports = All;
