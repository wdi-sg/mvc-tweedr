var React = require("react");

class Home extends React.Component {
  render() {
    console.log(this.props.types);
    return (
      <html>
        <head />
        <body>
          <h3>Hello, you are working on the tweedr app</h3>
        </body>
      </html>
    );
  }
}

module.exports = Home;
