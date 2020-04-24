var React = require("react");

class Home extends React.Component {
  render() {
    console.log(this.props.types);
    return (
      <html>
        <head />
        <body>
          <nav>
            <a href="/html/">Tweedr</a>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </nav>
        </body>
      </html>
    );
  }
}

module.exports = Home;
