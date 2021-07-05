var React = require("react");

class Login extends React.Component {
  render() {
    console.log(this.props.types);
    return (
      <html>
        <head />
        <body>
          <h3>Login</h3>
          <form method="POST" action={"/authenticateUser"}>
          <table>
            <tr>
              <td>Name</td>
              <td><input name="name" placeholder="Name" /></td>
            </tr>
            <tr>
              <td>Password</td>
              <td><input name="password" type="password" placeholder="Password" /></td>
            </tr>
            <tr>
              <td></td>
              <td><input name="Login" type="submit" /></td>
            </tr>
          </table>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Login;
