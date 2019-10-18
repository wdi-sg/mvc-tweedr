const React = require("react");
const GetUserCredentials = require("./components/GetUserCredentials");

class Register extends React.Component {
  render() {
    return (
      <div>
        <h1>User Registration</h1>
        <GetUserCredentials type="Register" />
      </div>
    );
  }
}

module.exports = Register;
