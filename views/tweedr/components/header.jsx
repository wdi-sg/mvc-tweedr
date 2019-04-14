let React = require("react");

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="nav d-flex justify-content-around">
          <a className="nav-link active" href="/">
            Home
          </a>
          <a className="nav-link" href="#">
            Link
          </a>
          <a className="nav-link" href="#">
            Link
          </a>
          <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
            Disabled
          </a>
        </nav>
      </header>
    );
  }
}
module.exports = Header;
