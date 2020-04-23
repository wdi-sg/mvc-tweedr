const React = require("react");

class Register extends React.Component {
  render() {

    return (
      
      <html>
        <head />
        <body>
          <form action="/register" method="POST">
          <p>Name<input type="text" name="name"/></p>
          <p>Password<input type="password" name="password"/></p>
          <input type="submit" value="Register"/>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Register;
