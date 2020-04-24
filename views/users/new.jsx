var React = require("react");

class NewUser extends React.Component {
  render() {
    return (
      <html>
        <body>
          <p>Register</p>
          <form method='POST' action='/users'>
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

module.exports = NewUser;