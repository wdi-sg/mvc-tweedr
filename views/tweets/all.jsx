const React = require("react");
const Nav = require("../ui/nav");

class All extends React.Component {
  render() {
      // console.log("***** this.props.allTweets *****\n",this.props.allTweets);
    return (
      <html>
        <head />
        <body>
          <Nav />
          <h3>All Tweets</h3>
          <ul>
              {this.props.allTweets.map(tweet => (
                  <React.Fragment>
                      <li>{tweet.content}</li>
                      <li>@{tweet.name}</li>
                      <hr/>
                  </React.Fragment>
              ))}
          </ul>
        </body>
      </html>
    );
  }
}

module.exports = All;
