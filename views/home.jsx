var React = require("react");

class Home extends React.Component {
  render() {
    console.log(this.props.types);
    return (
      <html>
        <head />
        <body>
          <h1>Welcome to Tweedr</h1>

          <div>
          <h4>Register</h4>
          </div>
          <div>
            <form action="/register" method="POST">
            <p>Name <input name="name" required/></p>
            <p>Password <input type="password" name="password"/></p>
            <p><input type="submit"/></p>
            </form>
          </div>

          <div>
          <h4>Login</h4>
          </div>
          <div>
            <form action="/login" method="POST">
            <p>Name <input name="name" required/></p>
            <p>Password <input type="password" name="password"/></p>
            <p><input type="submit"/></p>
            </form>
          </div>

        </body>
      </html>
    );
  }
}

module.exports = Home;