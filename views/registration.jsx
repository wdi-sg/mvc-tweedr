var React = require("react");

class Login extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <h2>Create TWEEDR account</h2>
          <form method="POST" action="/tweedr/register">
            <div><input name="username" defaultValue="Username"></input></div>
            <div><input name="password" defaultValue="Password"></input></div>
            <div><input name="email" defaultValue="Email Address"></input></div>
            <div><button type="submit">Sign up</button></div>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Login;