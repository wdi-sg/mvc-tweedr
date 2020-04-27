var React = require("react");

class Home extends React.Component {
  render() {

    return (
        <html>
            <head>
                <link rel="stylesheet" type="text/css" href="/style.css" />
            </head>
            <body>
                <h3>Tweedr</h3>
                <br />
                <div className="registration-box">
                    <p><a href="/register">Register</a></p>
                    <p><a href="/login">Log-in</a></p>
                </div>
                <br/>
                <script src="/script.js"></script>
            </body>
        </html>
    );
  }
}

module.exports = Home;
