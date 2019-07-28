var React = require("react");

class RegisterNewUser extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <h3>Create account!</h3>
          <form method="POST" action="/register">
          <p> Username: <input type="text" name="username"/> </p>
          <p> Password: <input type="text" name="password"/> </p>
          <input type="submit"/>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = RegisterNewUser;