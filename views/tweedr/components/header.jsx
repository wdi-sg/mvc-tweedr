let React = require("react");

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="nav d-flex justify-content-around">
          <a className="nav-link active" href="/">
            Home
          </a>
          <a className="nav-link" href="/register">
            Register
          </a>
          <a className="nav-link" href="/login">
            Log In
          </a>
          <a className="nav-link" href="/logout">
            Log Out
          </a>
        </nav>
      </header>
    );
  }
}
module.exports = Header;
