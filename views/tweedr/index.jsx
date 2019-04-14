let React = require("react");
let Head = require("./components/head");
let Header = require("./components/header");
let BootstrapScripts = require("./components/bootstrap_scripts");
let TweetsList = require("./components/tweets_list");
let TweetBox = require("./components/tweetbox");

class Index extends React.Component {
  render() {
    return (
      <html>
        <Head />
        <body>
          <Header />
          <div className="container">
          Hello World
          <TweetBox/>
          <TweetsList allTweets={this.props.allTweets} />
          </div>
        </body>
        <BootstrapScripts />
      </html>
    );
  }
}
module.exports = Index;
