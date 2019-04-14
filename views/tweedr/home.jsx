var React = require("react");

class Home extends React.Component {

  render() {
    const tweets = this.props.allUsers.map(eachTweet => {
            return (
                 <div>
                   <h3>{eachTweet.tweet}</h3>
                </div>
            )
        });

    return (
        <html>
          <head />
            <body>
              {tweets}
            </body>
        </html>
    );
  }
}

module.exports = Home;