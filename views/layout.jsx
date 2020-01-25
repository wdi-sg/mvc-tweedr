const React = require("react");

class Layout extends React.Component {
  render() {
    let loggedIn;
    let makeTweed;
    if (this.props.loggedIn !== undefined) {
      loggedIn = (
        <div>
          <span className="mr-2">Welcome, {this.props.username}!</span>
          <a href="/logout">Logout</a>
        </div>
      );
      makeTweed = (
        <li className="nav-item active">
          <a className="nav-link" href="/tweed">
            Write Tweed <span className="sr-only">(current)</span>
          </a>
        </li>
      );
    } else {
      loggedIn = <a href="/login">Login</a>;
    }
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <title>Document</title>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossOrigin="anonymous"
          />
          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
            integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
            crossOrigin="anonymous"
          ></script>
        </head>
        <body>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
              Tweedr
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav mr-auto">
                {makeTweed}
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
              </ul>
              <span className="navbar-text">{loggedIn}</span>
            </div>
          </nav>
          {this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = Layout;
