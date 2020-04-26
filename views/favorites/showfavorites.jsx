var React = require("react");

class ShowFavorites extends React.Component {
  render() {
    const tweetsListElements = this.props.tweetArray.map(tweet => {
        return <li>{tweet}</li>
    })
    return (
      <html>
        <head><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link></head>

        <body>
          <h3>Your Favorite Tweets</h3>
          <ul>{tweetsListElements}</ul>
        </body>
      </html>
    );
  }
}

module.exports = ShowFavorites;