var React = require("react");

class Login extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
            <form method="POST" action="/login">
            Username: <input type="text" name="username"/><br/><br/>
            Password: <input type="text" name="password"/><br/><br/>
            <input type="submit"/>
            </form>

        </body>
      </html>
    );
  }
}

module.exports = Login;