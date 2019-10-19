var React = require("react");

class LoginFail extends React.Component {
  render() {
    console.log("this.props!!!!!!", this.props);
    return (
      <html>
        <head />
        <body>
          <h3>Oops! Wrong email or password entered!</h3>
        </body>
      </html>
    );
  }
}

module.exports = LoginFail;
