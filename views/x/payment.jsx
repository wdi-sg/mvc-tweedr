var React = require("react");
const Navbar = require('./navbar.jsx');
const Head = require('./head.jsx');

class Pay extends React.Component {
    render(){
        console.log(this.props)
        let sender = this.props.sender_name;
        let recipient = this.props.recipient_name;
        let amount = this.props.amount;
        return(
           <html>
            <Head />
            <body>
              <Navbar key1={this.props}/>
              <div class="container">
                  <h1>Payment made</h1>
                  <h5>Made payment ${amount} to {recipient}</h5>
              </div>
            </body>
          </html>
        )

    }
}

module.exports = Pay;