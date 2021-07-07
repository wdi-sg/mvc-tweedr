var React = require("react");

class Register extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <h3>Register an account with Tweedr below!</h3>
          <form method="POST" action="/register">
            <div>Name: <input type="text" name="name" required/></div>
            <br />
            <div>Email: <input type="text" name="email" required/></div>
            <br />
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

module.exports = Register;