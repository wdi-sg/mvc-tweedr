var React = require("react");
const sha256 = require('js-sha256');
const SALT = "TwEeDr";


class AddTweet extends React.Component {
  render() {


    return (
      <html>
        <head>
            <link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" type="text/css" href="/home.css"/>
        </head>
        <body>

            <div className="addtweet_wrapper">
                <form action='/tweedr/addtweed' method="POST">
                    <p>Tweet: <textarea className="tweetbox" name="tweed"/></p>
                    <input type="hidden" name="createdby_user"/>
                    <input type="submit" name="submit"/>
                </form>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = AddTweet;
