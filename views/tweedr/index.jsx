var React = require("react");

class Index extends React.Component {
  render() {
const tweetArr = this.props.data;

const tweetList = tweetArr.map((tweet)=>{
    return <li>{tweet.post}</li>
})
    return (
      <html>
        <head />
        <body>
          <h3>ALL TWEETS</h3>
          <ul>{tweetList}</ul>
          <a href="/login">Login</a>
          <br/>
          <br/>
          <a href="/write">Write a tweed</a>
          <br/>
          <br/>
          <a href="/register">Create an account</a>

        </body>
      </html>
    );
  }
}

module.exports = Index;