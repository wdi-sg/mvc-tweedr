const React = require("react");

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/tweets/new">Add New Tweet</a>
          </li>
          <li>
            <a href="/payments/send">Send Payment</a>
          </li>
        </ul>
      </nav>
    );
  }
}

module.exports = Nav;
