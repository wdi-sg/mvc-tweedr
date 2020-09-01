var React = require("react");

class Login extends React.Component {
  render() {
    return (
      <html>
        <head/>
        <body>
          <h3>Welcome to Tweedr</h3>
          <form method="POST" action="/checkUser">
              Username: <input type="text" name="username"/>
              Password: <input type="password" name="password"/>
              <input type="submit"/>
                </form>
              <br/>
              <p>Not on Tweedr yet?</p>
              <button type ="button" id="register">Sign up for an account</button>
        </body>
      </html>
    );
  }
}

module.exports = Login;