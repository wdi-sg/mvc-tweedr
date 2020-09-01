var React = require("react");

class NewUser extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
            <form method="POST" action="/users/new/">
            New Username: <input type="text" name="username"/><br/><br/>
            New Password: <input type="text" name="password"/><br/><br/>
            <input type="submit"/>
            </form>

        </body>
      </html>
    );
  }
}

module.exports = NewUser;