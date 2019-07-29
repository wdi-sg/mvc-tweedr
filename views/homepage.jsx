var React = require("react");

class Home extends React.Component {
  render() {
    let tweet = this.props.tweets.map ( x => {
        let content = x.message;
        let userName = x.user_id;
        // let timestamp = to_char(x.creationInfo, 'DD Mon YYYY HH:MI:SSPM');

        return<div><h5> Tweeted by: {userName} </h5><p> {content} </p><p> Tweeted at: </p></div>
    })

    return (
      <html>
        <head />
        <body>
          <h3>Tweedr</h3>
          {tweet}
        </body>
      </html>
    );
  }
}

module.exports = Home;