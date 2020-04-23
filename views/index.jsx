var React = require("react");

class Home extends React.Component {
  render() {
    console.log(this.props.result)
    const allTweets = this.props.result;
    const tweets = allTweets.map(tweet =>{
      return<p>{tweet.name}<br/>{tweet.content}</p>
    })
    return (
      <html>
        <head />
        <body>
          <h1>Tweedr</h1>
          {tweets}
        </body>
      </html>
    );
  }
}

module.exports = Home;
