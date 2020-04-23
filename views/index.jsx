var React = require("react");

class Home extends React.Component {
  render() {
    const name = this.props.username
    const tweetsListElements = this.props.tweetArray.map(tweet => {
        return <li>{tweet}</li>
    })
    const hashtagOptionElements = this.props.hashtagArray.map(obj => {
        return <option value = {obj.id}> {obj.hashtag} </option>
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
                <div className="form-group">
                    <label htmlFor="hashtagid">Hash Tag</label>
                    <select className="form-control" id="hashtagid" name="hashtagid">
                      {hashtagOptionElements}
                    </select>
                </div>
                <button type="submit" value="Submit" className="btn btn-primary">Tweet</button>
          </form>
          <br />
          <br />

          <div className="container"><h1>Add a Hashtag!</h1></div>
            <form method="POST" action="/addhashtag" className = "container">
              <div className="form-group">
                <input type="text" className="form-control" id="hashtag" name="hashtag"></input>
              </div>
              <button type="submit" value="Submit" className="btn btn-primary">Add Hashtag</button>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Home;