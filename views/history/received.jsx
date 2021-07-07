const React = require("react");
const Nav = require("../ui/nav");

class All extends React.Component {
  render() {
    // console.log("***** this.props.allTweets *****\n",this.props.allTweets);
    let tweets = <p>No payment received yet</p>;

    if (this.props.allPaymentsReceived) {
      tweets = (
        <ul>
          {this.props.allPaymentsReceived.map(payment => (
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
          <h3>All Payments Received</h3>
          {tweets}
        </body>
      </html>
    );
  }
}

module.exports = All;
