var React = require("react");

 class Message extends React.Component {
     render() {
         return (
            <html>
             <h3>{this.props.message}</h3>
             </html>

                 )
   }
 }

 module.exports = Message;