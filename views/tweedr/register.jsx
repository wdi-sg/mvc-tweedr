var React = require('react');

class Register extends React.Component {
  render() {
    console.log(this.props.types);
    return (
      <html>
        <head/>
        <body>
        <h1>Register User!</h1>
        <form method="POST" action="/register">
          Username:
          <input type="text" name="username"/>
          Password:
          <input type="password" name="password"/>
          <button type="submit">Submit!</button>
        </form>
        </body>
      </html>
    );
  }
}

module.exports = Register;
