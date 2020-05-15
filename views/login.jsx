var React = require("react");

class Login extends React.Component {
  render() {
    // console.log(this.props.types);
    return (
      <html>
        <head/>
        <body>
          <h1>Login</h1>
          <form action="/login" method="POST">
            Username: <input type="text" name="name" /><br />
            Password: <input type="text" name="password" /><br />
            <input type="submit" value="Login" />
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Login;