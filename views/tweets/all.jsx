const React = require("react");
const Nav = require("../ui/nav");

class All extends React.Component {
  render() {
    // console.log("***** this.props.allTweets *****\n",this.props.allTweets);
    let tweets = <p>No tweets found, please <a href="/tweets/new">add a new tweet!</a></p>;

    if (this.props.allTweets) {
      tweets = (
        <ul>
          {this.props.allTweets.map(tweet => (
            <React.Fragment>
              <li>{tweet.content}</li>
              <li>@{tweet.name}</li>
              <hr />
            </React.Fragment>
          ))}
        </ul>
      );
    }

    return (
      <html>
        <head />
        <body>
          <Nav />
          <h3>All Tweets</h3>
          {tweets}
        </body>
      </html>
    );
  }
}

module.exports = All;
