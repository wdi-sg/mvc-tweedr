var React = require("react");

class RegisterSuccessful extends React.Component {
  render() {
    console.log("Account created!");
    return (
      <html>
        <head />
        <body>
          <h3>Account created!</h3>
          <p> Please <a href="/login">login </a> to your account.</p>
        </body>
      </html>
    );
  }
}

module.exports = RegisterSuccessful;