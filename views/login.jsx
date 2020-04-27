const React = require("react");

class Login extends React.Component {
  render() {

    return (
      
      <html>
        <head />
        <body>
          <form action="/login" method="POST">
          <p>Name<input type="text" name="name"/></p>
          <p>Password<input type="password" name="password"/></p>
          <input type="submit" value="Login"/>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Login;
