const React = require("react");

class Navbar extends React.Component {
  render() {
    const author = "TWEEDR";
    const year = "2020";
    return (
      <navbar>
          <li>Home</li>
          <li>Explore</li>
          <button class="button">Tweedr</button>
      </navbar>
    );
  }
}

module.exports = Navbar;