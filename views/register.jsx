var React = require("react");

class Register extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <form action="/register" method="POST">
            <h3>Please Register!</h3>
            <p>
              Name: <input type="text" name="name" />
            </p>
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

module.exports = Register;
