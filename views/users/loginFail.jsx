const React = require("react");
const Nav = require("../ui/nav");
const Login = require("../users/login");

class LoginFail extends React.Component {
  render() {
    console.log("this.props!!!!!!", this.props);
    return (
      <html>
        <head />
        <body>
          <Login msg="Oops! Wrong email or password entered!" />
        </body>
      </html>
    );
  }
}

module.exports = LoginFail;
