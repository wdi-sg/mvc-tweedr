var React = require("react");

class Register extends React.Component {
  render() {
    console.log(this.props.types);
    return (
      <html>
        <head />
        <body>
          <h3>Hello Please register here</h3>
        </body>
      </html>
    );
  }
}

module.exports = Register;