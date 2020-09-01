var React = require("react");

class Home extends React.Component {
  render() {
    console.log(this.props.allTweets)
    let tweetHTML = this.props.allTweets.map((item)=>{
        return <div>{item.tweet}, {item.user_id}</div>
    })
    return (
      <html>
        <head />
        <body>
          <h3>Feed</h3>
          {tweetHTML}
        </body>
      </html>
    );
  }
}

module.exports = Home;