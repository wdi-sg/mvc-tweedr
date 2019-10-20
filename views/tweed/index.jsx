var React = require("react");

class Home extends React.Component {
  render() {
    const tweeds = this.props.result.map(tweed => {
      return (
        <li>{tweed.tweed}</li>
      );
    });
    return (
      <html>
        <head />
        <body>
          <h3>TWEEDR</h3>
          <ul>
            {tweeds}
          </ul>
        </body>
      </html>
    );
  }
}

module.exports = Home;