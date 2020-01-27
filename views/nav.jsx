const React = require("react");

class Navbar extends React.Component {
  render() {
    const author = "TWEEDR";
    const year = "2020";
    return (
      <navbar>
          <a href="#">Register</a> | <a href="#">Login</a>
      </navbar>
    );
  }
}

module.exports = Navbar;