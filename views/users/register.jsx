var React = require("react");

class Register extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <h3>Register</h3>
          <form action="/users/register" method="POST">
            <input type="text" placeholder="enter name"/><br/>
            <input type="email" placeholder="enter email"/><br/>
            <input type="password" placeholder="enter password"/><br/>
            <input type="submit" value="register"/>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Register;
