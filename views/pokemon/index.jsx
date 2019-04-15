var React = require("react");

class Home extends React.Component {
  render() {


    let tweets = this.props.ccb.map(tweet => {
                              return <p>{tweet.tweets}</p>
                            });
    // console.log(tweets);
    return (
      <html>
        <head />
        <body>
          <h3>Hello</h3>
          <p> {this.props.ccb[0].tweets}</p>
          {tweets}
        </body>
      </html>
    );
  }
}

module.exports = Home;