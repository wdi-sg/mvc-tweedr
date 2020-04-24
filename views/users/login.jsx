var React = require("react");

class Login extends React.Component {
  render() {
    return (
      <html>
        <body>
          <p>Log In</p>
          <form method='POST' action='/users/login'>
            <p>Username</p>
            <input type='text' name='username'/>
            <p>Password</p>
            <input type='password' name='password'/>
            <br/>
            <input type='submit' value='Submit'/>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Login;