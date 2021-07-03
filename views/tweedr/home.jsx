var React = require("react");
var Layout = require("../components/layout");
var TweetsList = require("../components/tweetsList");
var TweetCard = require("../components/create-tweet-layout");

class Home extends React.Component {
  render() {
    let tweetsList = this.props.getAllTweets;
    let cookies = this.props.cookies;
    return (

      <Layout>
          <div className="row tweetcard">
            <TweetCard cookies={cookies}/>
          </div>
          <div className="row tweetslist">
            <TweetsList tweetsList={tweetsList}></TweetsList>
          </div>
      </Layout>
    );
  }
}

module.exports = Home;