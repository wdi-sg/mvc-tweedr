const React = require("react");
const Layout = require("./layout");

class Following extends React.Component {
  render() {
    let type;
    let tweetElement;

    if (this.props.type === "following") {
      type = "Tweeds from people you're following:";
      const tweets = this.props.followingTweets;
      tweetElement = tweets.map(tweet => {
        const tweetLink = "/tweeds/" + tweet.id;
        return (
          <div>
            <h6>{tweet.username} tweeded:</h6>
            <p>
              <a className="mr-3" href={tweetLink}>
                {tweet.tweets}
              </a>
              <span>
                <em>{tweet.created_at.toString()}</em>
              </span>
            </p>
          </div>
        );
      });
    } else if (this.props.type === "followers") {
      type = "Tweeds from your followers:";
      const tweets = this.props.followingTweets;
      tweetElement = tweets.map(tweet => {
        const tweetLink = "/tweeds/" + tweet.id;
        return (
          <div>
            <h6>{tweet.username} tweeded:</h6>
            <p>
              <a className="mr-3" href={tweetLink}>
                {tweet.tweets}
              </a>
              <span>
                <em>{tweet.created_at.toString()}</em>
              </span>
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
        <div className="container mt-3">
          <h2>{type}</h2>
          {tweetElement}
        </div>
      </Layout>
    );
  }
}

module.exports = Following;
