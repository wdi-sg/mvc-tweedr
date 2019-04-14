let React = require("react");
let Head = require("./components/head");
let BootstrapScripts = require("./components/bootstrap_scripts");
let TweetsList = require("./components/tweets_list");

class Index extends React.Component {
  render() {

    return (
      <html>
        <Head />
        <body>
          Hello World
          <TweetsList allTweets = {this.props.allTweets}/>
        </body>
        <BootstrapScripts />
      </html>
    );
  }
}
module.exports = Index;
