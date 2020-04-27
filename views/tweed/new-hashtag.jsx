var React = require("react");

class Hashtag extends React.Component {
  render() {
        // console.log('register.jsx')
        // let message = ""
        // if (this.props.login === "failed") {
        //     message = "Name/Password doesn't match. Please try again. Name/Password is case-sensitive."
        // }

        let hashtags = this.props.result;

        let allHashtags = hashtags.map((hashtag) => {
            return <li key={hashtag.id}><a href="">{hashtag.hashtag}</a></li>
        })

    return (
      <html>
        <head>
            <link rel="stylesheet" type="text/css" href="/style.css" />
        </head>
        <body>
            <h3>Tweedr - Hashtag</h3>
            <form action="/hashtag" method="POST">
                <p># <input name="hashtag" required/></p>
                <p><input type="submit" /></p>
            </form>
            <br/>

            <div className="hashtag-box">
                <ul className="hashtag">{allHashtags}</ul>
            </div>
            <script src="/script.js"></script>
        </body>
      </html>
    );
  }
}
module.exports = Hashtag;