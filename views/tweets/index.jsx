var React = require("react");

class Home extends React.Component {
  render() {
    console.log('info are passed into jsx');
    var showUserName = this.props.tweeteds[0].user_id;
    const userTweets = this.props.tweeteds.map(tweets => {
        return <li>{tweets.tweet}</li>
    })
    return (
      <html>
        <head />
        <body>
            <div>
                <h1>Hi {showUserName}, below is your tweets!:</h1>
            </div>
            <div>
                <ul>
                    {userTweets}
                </ul>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;