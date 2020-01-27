var React = require('react');

class Login extends React.Component {
  render() {
    console.log(this.props.types);
    return (
      <html>
        <head/>
        <body>
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

module.exports = Login;
