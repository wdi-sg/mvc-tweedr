var React = require("react");

class LoginUnsuccessful extends React.Component {
  render() {
    let username = this.props.username;
    let password = this.props.password;
    return (
      <html>
        <head />
        <body>
          <h3>Incorrect username/password!</h3>
          <h3> Please login to your Tweedr account again.</h3>
          <form method="POST" action="/login">
          <p> Username: <input type="text" name="username" value={username}/> </p>
          <p> Password: <input type="text" name="password" value={password}/> </p>
          <input type="submit"/>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = LoginUnsuccessful;