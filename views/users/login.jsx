const React = require("react");
const Nav = require("../ui/nav");

class Login extends React.Component {
  render() {
    let msg = "";
    if (this.props.msg) {
      msg = this.props.msg;
    }

    return (
      <html>
        <head />
        <body>
          <Nav />
          { msg }
          <h3>Login</h3>
          <form action="/login" method="POST">
            <input type="email" name="email" placeholder="enter email" required/><br/>
            <input type="password" name="password" placeholder="enter password" required/><br/>
            <input type="submit" value="login"/>
          </form>
          <p><a href="/register">Register</a></p>
        </body>
      </html>
    );
  }
}

module.exports = Login;
