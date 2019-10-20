var React = require("react");

class Home extends React.Component {
  render() {

    return (
      <html>
        <head />
        <body>
          <h3>Welcome, {this.props.name}!</h3>
          <h2>Logged in as @{this.props.username}</h2>
        </body>
      </html>
    );
  }
}

module.exports = Home;