var React = require("react");

class Home extends React.Component {
  render() {

    return (
      <html>
        <head />
        <nav>
        <ul>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
        </ul>
        </nav>
        <body>
          <h3>TWEEDER</h3>
        </body>
      </html>
    );
  }
}

module.exports = Home;