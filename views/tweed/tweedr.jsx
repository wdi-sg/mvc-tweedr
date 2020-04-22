var React = require("react");

class Tweedr extends React.Component {
  render() {

    return (
        <html>
            <head>
                <link rel="stylesheet" type="text/css" href="/style.css" />
            </head>
            <body>
                <div className="container">
                    <h3>Tweedr</h3>
                    <p>What Ya Thinking</p>
                    <br />
                    <form action="/tweed" method="POST">
                        <input className="tweed-input" name="tweedMessage" required/>
                        <input className="tweed-btn" type="submit" value="tweed"/>
                    </form>

                    <div className="chat-box">

                    </div>
                    <br/>
                    <br/>
                    <div>
                        <form action="/logout?_method=delete" method="POST">
                            <input type="submit" value="log-out"/>
                        </form>
                    </div>

                    <br/>
                </div>
                <script src="/script.js"></script>
            </body>
        </html>
    );
  }
}

module.exports = Tweedr;