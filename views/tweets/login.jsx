var React = require("react");

class Login extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <h3>Log In to Tweedr</h3>
          <form method="POST" action="/home">
            <div>Username: <input type="text" name="username" required/></div>
            <br />
            <div>Password: <input type="text" name="password" required/></div>
            <br />
            <input type="submit" value="Submit"/>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Login;