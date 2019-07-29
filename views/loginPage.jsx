var React = require("react");

class Login extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <h2>TWEEDR!</h2>
          <form method="POST" action="/tweedr/home">
            <div><input name="username" defaultValue="Username"></input></div>
            <div><input name="password" defaultValue="Password"></input></div>
            <div><button type="submit">Log In </button></div>
          </form>
          <a href="/tweedr/register">Not a user yet? Register here</a>
        </body>
      </html>
    );
  }
}

module.exports = Login;