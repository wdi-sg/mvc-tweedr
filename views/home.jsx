var React = require("react");

class Home extends React.Component {
  render() {
    let allTweets;
    if(this.props.tweets !== undefined){
      allTweets = this.props.tweets.map(tweet => {
          return <li>{tweet.message}</li>
      });
    }else {
      allTweets = <li>No tweet yet!</li>;
    }
    return (
      <html>
        <head />
        <body>
          <h1>All tweets</h1>
          <ul>
            {allTweets}
          </ul>
        </body>
        <div>
          <a href="/tweet">Tweet a message!</a>
        </div>
      </html>
    );
  }
}

module.exports = Home;