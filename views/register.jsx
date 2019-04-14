var React = require("react");

class Register extends React.Component {
  render() {
    // console.log(this.props.types);
    return (
      <html>
        <head/>
        <body>
          <h1>Register</h1>
          <form action="/register" method="POST">
            Username: <input type="text" name="name" /><br />
            Password: <input type="text" name="password" /><br />
            <input type="submit" value="Register" />
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Register;