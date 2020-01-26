var React = require("react");

class AllTweets extends React.Component {
  render() {
      var list = this.props.allTweetsArray.map(el => {
          return <li> {el.tweet} by {el.name}</li>
      })
    return (
      <html>
        <head>
        </head>
        <body>
          <h3>Tweets</h3>
          <ul>
              {list}
          </ul>
        </body>
      </html>
    );
  }
}

module.exports = AllTweets;
