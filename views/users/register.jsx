const React = require("react");
const Nav = require("../ui/nav");

class Register extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <Nav/>
          <h3>Register</h3>
          <form action="/register" method="POST">
            <input type="text" name="name" placeholder="enter name"/><br/>
            <input type="email" name="email" placeholder="enter email"/><br/>
            <input type="password" name="password" placeholder="enter password"/><br/>
            <input type="submit" value="register"/>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Register;
