const React = require("react");
const Nav = require("../ui/nav");

class RegisterSuccess extends React.Component {
  render() {
      console.log("this.props!!!!!!",this.props)
    return (
      <html>
        <head />
        <body>
          <Nav />
          <h3>Hi, {this.props.registeredUser[0].name}!</h3>
          <p>Welcome to Tweedr!</p>
        </body>
      </html>
    );
  }
}

module.exports = RegisterSuccess;
