const React = require("react");
// const Footer = require("./footer");

class Layout extends React.Component {
    render() {
        return (
        <html>
        <head>
          <title>tweedr</title>
          <link rel="stylesheet" href="/style.css"></link>
          <link href="https://fonts.googleapis.com/css?family=Righteous&display=swap" rel="stylesheet"></link>
        </head>

        <body>
            <div className="container">

            <nav>
                <a href="/register">Register</a>
                <a href="/login">Login</a>
                <a href="/about">About</a>
            </nav>

            <div className="title"><h1>tweedr</h1></div>

            <form action = "/register" method="GET">
            <button className="register-btn" type="submit">Register</button>
            </form>
            </div>

            <div className="fluid-container">{this.props.children}</div>
        </body>
      </html>
        );
    }
}

module.exports = Layout;