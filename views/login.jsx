var React = require("react");

class Login extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <form action="/login" method="POST">
            <h3>Please log in!</h3>
            <p>
                Email: <input type="email" name="email" />
            </p>
            <p>
              Password: <input type="password" name="password" />
            </p>
            <p>
              <input type="submit" />
            </p>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Login;
