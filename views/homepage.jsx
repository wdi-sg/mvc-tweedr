var React = require("react");

class Home extends React.Component {
  render() {

    let tweets = this.props.data.map(tweet => {
                              return <div>
                              <h3>User Id {tweet.user_id}</h3>
                              <p>{tweet.tweets}</p>
                              </div>
                            });

    return (
      <html>
        <head />
        <body>
          <h3>HIIIIIIIIII</h3>
          <p> {this.props.data[0].tweets}</p>
          {tweets}
        </body>
      </html>
    );
  }
}

module.exports = Home;