let React = require("react");

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav class="nav d-flex justify-content-around">
          <a class="nav-link active" href="/">
            Home
          </a>
          <a class="nav-link" href="#">
            Link
          </a>
          <a class="nav-link" href="#">
            Link
          </a>
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
            Disabled
          </a>
        </nav>
      </header>
    );
  }
}
module.exports = Header;
