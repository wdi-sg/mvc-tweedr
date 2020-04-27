var React = require("react");

class Home extends React.Component {
  render() {
    const allTweeds = this.props.allTweeds;
    let list = <ul style={{'display': 'none'}}></ul>;

    if (allTweeds) {
      const tweeds = allTweeds.map(tweed => {
        // return <li>'{tweed.content}' by: {tweed.username}</li>;
        return <li>'{tweed.content}' by: {tweed.username}<br /><button className="favorite" value={tweed.id}>Favorite</button></li>
      });

      list = <ul>{tweeds}</ul>;
    } else {

      allTweets = <li>No tweeds!</li>;

    }

    return (
      <html>
        <body>
          <p id='header'>Register or Log In to view Tweeds</p>
          {list}
          <form id='register' method='GET' action='/users/new'>
            <input type='submit' value='Register'/>
          </form>
          <br/>
          <form id='login' method='GET' action='/users/login'>
            <input type='submit' value='Log In'/>
          </form>
          <script>var loggedIn = `{this.props.loggedIn}`;</script>
          <script src='home.js'></script>
          <script src='script.js'></script>
        </body>
      </html>
      );
  }
}

module.exports = Home;
