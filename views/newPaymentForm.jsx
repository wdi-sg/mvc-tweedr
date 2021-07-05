var React = require("react");

class NewPaymentForm extends React.Component {
    render(){
        return(
            <html>
            <head>
                <title>New Payment Form</title>
            </head>
            <body>
                <h1>Add New Payment</h1>
                <form method="POST" action="/payment">
                    Input recipient ID: <input type="text" name="recipientID" />
                    <br />
                    Amount: <input type="text" name="amount" />
                    <br />
                    <input type="submit" value="Send Payment" />
                </form>
            </body>
            </html>
        );
    };
};

module.exports = NewPaymentForm;