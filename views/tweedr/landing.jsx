var React = require("react");

class Landing extends React.Component {
  render() {
    return (
      <html>
        <head />
        <title>
            Tweedr
        </title>
        <body>
            <h3>Hello, wana send tweets? Register for a tweedr account</h3>
            <a href="/register">Register</a>
            <p></p>
            <p></p>
            <h3>Have an account with Tweedr? Login from here</h3>
            <a href="/login">Login</a>
        </body>
      </html>
    );
  }
}

module.exports = Landing;