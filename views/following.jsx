const React = require("react");
const Layout = require("./layout");

class Following extends React.Component {
  render() {
    console.log(this.props);
    let type;
    let tweetElement;
    console.log(this.props);
    if (this.props.type === "following") {
      type = "Tweets from people you're following:";
      const tweets = this.props.followingTweets;
      tweetElement = tweets.map(tweet => {
        const tweetLink = "/tweeds/" + tweet.id;
        return (
          <div>
            <h6>{tweet.username}</h6>
            <p>
              <a href={tweetLink}>{tweet.tweets}</a>
            </p>
          </div>
        );
      });
    } else if (this.props.type === "followers") {
      type = "Tweets from your followers:";
      const tweets = this.props.followingTweets;
      tweetElement = tweets.map(tweet => {
        const tweetLink = "/tweeds/" + tweet.id;
        return (
          <div>
            <h6>{tweet.username}</h6>
            <p>
              <a href={tweetLink}>{tweet.tweets}</a>
            </p>
          </div>
        );
      });
    }

    return (
      <Layout
        username={this.props.username}
        userID={this.props.userID}
        loggedIn={this.props.loggedIn}
      >
        <div className="container">
          <h2>{type}</h2>
          {tweetElement}
        </div>
      </Layout>
    );
  }
}

module.exports = Following;
