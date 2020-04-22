var React = require("react");

class Layout extends React.Component {
  render() {
    console.log(this.props.types);
    return (
      <html>
        <head/>
        <body style={{backgroundColor:"rgba(50,50,50,0.5)", textAlign:"center"}}>
          {this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = Layout;
