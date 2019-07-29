var React = require("react");
var Layout = require("./components/layout.jsx")
var Tweetcard = require("./components/component-tweetcard.jsx")

class Login extends React.Component {
  render() {
    console.log(this.props.types);
    var userTweets = this.props.data.map((obj)=>{
      return <Tweetcard id={obj.user_id} tweetid={obj.id} tweet={obj.tweet}></Tweetcard>
    })
    return (
      <Layout>
      <p>Here's what {this.props.data[0].name} has tweeted!</p>
      {userTweets}
      </Layout>
    );
  }
}

module.exports = Login;
