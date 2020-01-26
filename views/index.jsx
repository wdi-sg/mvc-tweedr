var React = require("react");

class Home extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <h3>Hello! {this.props.name}</h3>
        </body>
      </html>
    );
  }
}

module.exports = Home;
