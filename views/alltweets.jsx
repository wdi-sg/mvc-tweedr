var React = require("react");
var Layout = require("./components/layout.jsx")
var Tweetcard = require("./components/component-tweetcard.jsx")

class Alltweets extends React.Component {
  render() {
    console.log(this.props.types);
    var displayTweets = this.props.data.map((obj)=>{
      return <Tweetcard id={obj.id} name={obj.name} tweet={obj.tweet} tweetid={obj.tweetid}></Tweetcard>
    })
    return (
      <Layout>
        <h1>All tweets by user</h1>
        {displayTweets}
      </Layout>
    );
  }
}

module.exports = Alltweets;
