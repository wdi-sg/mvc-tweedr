var React = require('react');

class Login extends React.Component {
  render() {
    console.log(this.props.types);
    return (
      <html>
        <head/>
        <body>
        <h1>Login page</h1>
        <form method="POST" action="/login">
          Username:
          <input type="text" name="username"/>
          Password:
          <input type="password" name="password"/>
          <button type="submit">Login!</button>
        </form>
        </body>
      </html>
    );
  }
}

module.exports = Login;
