var React = require("react");

class AllTweets extends React.Component {

  render() {
      console.log(this.props.allTweetsArray)
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
          {this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = AllTweets;
