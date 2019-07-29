var React = require("react");

class Tweets extends React.Component {
  render() {

    const tweetsList = this.props.tweets.map((tweet)=>{
        var string = <div><p className="tweet">{tweet.tweet}</p>
                          <p className="user">{tweet.user_id}</p></div>;
        return string;
    });

    return (
      <html>
        <head />
        <body>
          <h3>Hello</h3>
          {tweetsList}
        </body>
      </html>
    );
  }
}

module.exports = Tweets;
