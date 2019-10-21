const React = require("react");
const GetUserCredentials = require("./components/GetUserCredentials");

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>User Login</h1>
        <GetUserCredentials type="Login" />
      </div>
    );
  }
}

module.exports = Login;
