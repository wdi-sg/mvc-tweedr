var React = require("react");

class Login extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <h3>Welcome to Tweedr!</h3>
          <form method="GET" action="/login">
            <p>
              Click here to Login:  <input type="submit" value="Login"/>
            </p>
          </form>
          <form method="GET" action="/register">
            <p>
              Click here to Register:  <input type="submit" value="Register"/>
            </p>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Login;