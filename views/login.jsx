var React = require("react");

class Login extends React.Component {
  render() {

    return (
      <html>
        <head />
        <body>
          <h1>Login</h1>
          <form method="POST" action="userLogin">
          <p>
          Username <input type="text" name="name" />
          </p>
           <p>
          Password <input type="text" name="password" />
          </p>
          <p>
          <button type="submit">Submit</button>
          </p>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Login;