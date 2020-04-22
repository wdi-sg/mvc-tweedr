var React = require("react");

class Tweedr extends React.Component {
  render() {
    let user = this.props.cookies.user;

    let tweeds = this.props.result;

    let allMessage = tweeds.map((tweed) => {
        return <li key={tweed.id}>{user}: {tweed.message}</li>
    })


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
                    <form action="/all" method="POST">
                        <input name="message" className="tweed-input" required/>
                        <input type="submit" value="tweed" className="tweed-btn" />
                    </form>

                    <div className="chat-box">
                        <ul>{allMessage}</ul>
                    </div>
                    <br/>
                    <br/>


                    <br/>
                </div>
                <script src="/script.js"></script>
            </body>
        </html>
    );
  }
}

module.exports = Tweedr;