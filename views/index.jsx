var React = require("react");

class Home extends React.Component {
  render() {
    console.log(this.props.username, "jsx file");
    return (
      <html>
        <head />
        <body>
          <h3>Welcome back, {this.props.username}</h3>
        </body>
      </html>
    );
  }
}

module.exports = Home;
