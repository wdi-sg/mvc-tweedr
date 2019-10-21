const React = require("react");

class User extends React.Component {
  render() {
    console.log(this.props.types);
    return (
      <html>
        <head />
        <body>
          <h1>TWEEDR</h1>
          <h3>What Ya Thinking?</h3>
          <h4>My profile</h4>
        </body>
      </html>
    );
  }
}

module.exports = User;
