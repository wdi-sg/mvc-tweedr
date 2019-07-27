var React = require("react");
var Layout = require("../components/layout");
var TweetsList = require("../components/tweetsList");

class Home extends React.Component {
  render() {
    let tweetsList = this.props.allTweets;
    return (
      <Layout>
          <h3>Hello</h3>
          <TweetsList tweetsList={tweetsList}></TweetsList>
      </Layout>
    );
  }
}

module.exports = Home;