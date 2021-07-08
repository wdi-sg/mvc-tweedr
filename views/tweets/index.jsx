var React = require("react");

class Home extends React.Component {
  render() {
    console.log(this.props.types);
    return (
      <html>
        <head />
        <body>
          <h3>Hello, this is for home all tweets page</h3>
        </body>
      </html>
    );
  }
}

module.exports = Home;