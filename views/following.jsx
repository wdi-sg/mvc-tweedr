const React = require("react");
const Layout = require("./layout");

class Following extends React.Component {
  render() {
    let type;
    let tweetElement;
    console.log(this.props);
    if (this.props.type === "following") {
      type = "Tweets from people you're following:";
      const tweets = this.props.followingTweets;
      tweetElement = tweets.map(tweet => {
        return (
          <div>
            <h6>{tweet.username}</h6>
            <p>{tweet.tweets}</p>
          </div>
        );
      });
    } else if (this.props.type === "followers") {
      type = "Tweets from your followers:";
      const tweets = this.props.followingTweets;
      tweetElement = tweets.map(tweet => {
        return (
          <div>
            <h6>{tweet.username}</h6>
            <p>{tweet.tweets}</p>
          </div>
        );
      });
    }

    return (
      <Layout>
        <div className="container">
          <h2>{type}</h2>
          {tweetElement}
        </div>
      </Layout>
    );
  }
}

module.exports = Following;
