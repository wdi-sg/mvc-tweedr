const React = require("react");
const Nav = require("../ui/nav");

class LoginSuccess extends React.Component {
  render() {
    // console.log("this.props!!!!!!", this.props);
    return (
      <html>
        <head />
        <body>
          <Nav />
          <h3>Welcome back to Tweedr! {this.props.loggedInUser[0].name}</h3>
        </body>
      </html>
    );
  }
}

module.exports = LoginSuccess;
