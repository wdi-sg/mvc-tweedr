var React = require("react");

class SignUpForm extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <h1>Sign Up Here</h1>
          <form action="/signUpVerification" method="POST">
            <input name="username" type="text" placeholder="Username"></input>
            <input name="password" type="text" placeholder="Password"></input>
            <button>Sign up</button>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = SignUpForm;
