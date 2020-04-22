var React = require("react");

class Home extends React.Component {
  render() {
    const name = this.props.username
    const tweetsListElements = this.props.tweetArray.map(tweet => {
        return <li>{tweet}</li>
    })

    return (
      <html>
        <head><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link></head>

        <body>
          <h3>{name}'s Tweets</h3>
          <ul>{tweetsListElements}</ul>
          <div className="container"><h1>Tweet!</h1></div>
            <form method="POST" action="/addtweet" className = "container">
              <div className="form-group">
                <input type="text" className="form-control" id="tweet" name="tweet"></input>
              </div>
                <button type="submit" value="Submit" className="btn btn-primary">Tweet</button>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Home;