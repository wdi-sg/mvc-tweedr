var React = require("react");

class Home extends React.Component {
  render() {
    // console.log(this.props.allStudent);
    let tweet = this.props.allTweets;
    // console.log(student)
    let listoftweets = tweet.map(oneTweet => {
        return (<li>{oneTweet.name}</li>);
    })
    return (
      <html>
        <head />
        <body>
          <h3>TWEEDR!</h3>
          <ul>
            {listoftweets}
          </ul>
        </body>
      </html>
    );
  }
}

module.exports = Home;
