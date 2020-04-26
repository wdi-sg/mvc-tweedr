var React = require("react");

class Register extends React.Component {
  render() {
    const registerForm = (
            <form action="/register" method="post">
                <input type="text" name="username" placeholder="Username"></input>
                <input type="text" name="password" placeholder="Password"></input>
                <input type="text" name="password2" placeholder="Confirm Password"></input>
                <input type="submit" value="login"></input>
            </form>
        )

    const register = <a href="/register">Don't have an account?</a>

    return (
      <html>
        <head />
        <body>
            <div>
                <h1>TWEEDR</h1>
            </div>
            <div>
                {registerForm}
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Register;