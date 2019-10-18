const React = require("react");

class Users extends React.Component {
  render() {
    const {name} = this.props;
    return (
      <html>
        <head />
        <body>
          <h1>TWEEDR</h1>
          <h3>{name} What Ya Thinking?</h3>
        </body>
      </html>
    );
  }
}

module.exports = Users;
