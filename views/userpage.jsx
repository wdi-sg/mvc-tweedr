var React = require("react");
var Layout = require("./components/layout.jsx")
var Tweetcard = require("./components/component-tweetcard.jsx")

class Login extends React.Component {
  render() {
    console.log(this.props.types);
    var userTweets = this.props.data.map((obj)=>{
      return <Tweetcard id={obj.user_id} tweetid={obj.tweetid} tweet={obj.tweet}></Tweetcard>
    })
    return (
      <Layout>
      <h1>Welcome to {this.props.data[0].name}'s Page'!</h1><br/><br/>
      <p>Here's what {this.props.data[0].name} has been thinking of</p>
      {userTweets}
      </Layout>
    );
  }
}

module.exports = Login;
