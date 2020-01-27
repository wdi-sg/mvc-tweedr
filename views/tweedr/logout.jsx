var React = require("react");

class Logout extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
            <h3>You have successfully log out from this account.</h3>
            <p></p>
            <p></p>
            <h3>To see your tweets again, login from here</h3>
            <a href="/login">Login</a>
        </body>
      </html>
    );
  }
}

module.exports = Logout;