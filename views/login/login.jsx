var React = require("react");

class Login extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <h3>Welcome Back!</h3>
          <h3> Login to your Tweedr</h3>
          <form method="POST" action="/login">
          <p> Username: <input type="text" name="username"/> </p>
          <p> Password: <input type="text" name="password"/> </p>
          <input type="submit"/>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Login;