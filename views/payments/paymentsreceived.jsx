const React = require("react");

class PaymentsReceived extends React.Component {
  render() {

    // console.log(this.props.payments);
const allPayments = this.props.payments.map( (payment, index) => {
             
            return (
                  <p>Date: {payment.payment_date} <br/>
                  Transaction ID: {payment.transaction_id}  <br/>
                  To: {payment.sender_username}  <br/>
                  From: {payment.recipient_username}  <br/>
                  Amount {payment.amount} <br/> <hr/> </p>

                )

        })
        return (


      <div>
            {allPayments}
      </div>
    )
  }
}

module.exports = PaymentsReceived;
