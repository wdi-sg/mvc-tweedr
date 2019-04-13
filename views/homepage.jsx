var React = require("react");

class Home extends React.Component {
  render() {

    let tweets = this.props.ccb.map(tweet => {
                              return <div>
                              <h3>User Id {tweet.user_id}</h3>
                              <p>{tweet.username}</p>
                              <p>{tweet.tweets}</p>
                              </div>
                            });

    return (
      <html>
        <head />
        <body>
          <h3>CAN ANYBODY HEAR MEEEE</h3>
          <p> {this.props.ccb[0].tweets}</p>
          {tweets}
        </body>
      </html>
    );
  }
}

module.exports = Home;