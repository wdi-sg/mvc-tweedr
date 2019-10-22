var React = require("react");

class Invoice extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <h3>Payment Invoice #{this.props.paymentid}</h3>
            <br />
            <div>Date:{this.props.date}</div>
            <br />
            <div>Sender: {this.props.sender}</div>
            <div>Recipient: {this.props.recipient}</div>
            <div>Amount: {this.props.amount}</div>

        </body>
      </html>
    );
  }
}

module.exports = Invoice;