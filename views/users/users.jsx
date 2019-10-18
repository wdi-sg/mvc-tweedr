const React = require("react");

class Users extends React.Component {
  render() {
    console.log(this.props.types);
    return (
      <html>
        <head />
        <body>
          <h1>TWEEDR</h1>
          <h3>What Ya Thinking?</h3>
        </body>
      </html>
    );
  }
}

module.exports = Users;
