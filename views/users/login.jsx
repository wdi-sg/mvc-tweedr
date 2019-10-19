const React = require("react");
const Nav = require("../ui/nav");

class Login extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <Nav />
          <h3>Login</h3>
          <form action="/login" method="POST">
            <input type="email" name="email" placeholder="enter email" required/><br/>
            <input type="password" name="password" placeholder="enter password" required/><br/>
            <input type="submit" value="login"/>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Login;
