var React = require("react");

class Home extends React.Component {
  render() {
    let allTweets;
    if(this.props.tweets !== undefined){
      allTweets = this.props.tweets.map(tweet => {
          return <li>{tweet.message}<br /><button className="favorite" value={tweet.id}>Favorite</button></li>
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
          <div>
            <a href="/tweet">Tweet a message!</a>
          </div>
          <script src="script.js"></script>
        </body>

      </html>
    );
  }
}

module.exports = Home;