var React = require("react");

class Register extends React.Component {
  render() {
    console.log(this.props.types);
    return (
      <html>
        <head />
        <body>
          <h3>Welcome to Tweedr! Register Here</h3>
              <form action="/register" method="POST">
              <p>User name <input name="username" required/></p>
              <p>Password <input type="password" name="password"/></p>
              <p><input type="submit"/></p>
              </form>
        </body>
      </html>
    );
  }
}

module.exports = Register;