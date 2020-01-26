var React = require("react");

class Home extends React.Component {
  render() {
    console.log(this.props.types);
    return (
      <html>
        <head />
        <body>
          <h1>Welcome to Tweedr</h1>
          <h4>What Ya Thinking?</h4>
          <div>
              <a href="/register">
              <button>Register</button>
              </a>
          </div>
          <div>
              <a href="/login">
              <button>Login</button>
              </a>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;