var React = require("react");

class Home extends React.Component {
  render() {
    const allTweeds = this.props.allTweeds;
    let list = <ul style={{'display': 'none'}}></ul>;

    if (allTweeds && this.props.loggedIn === 'true') {
      const tweeds = allTweeds.map(tweed => {
        return <li>'{tweed.content}' {tweed.hashtags} by: {tweed.username}</li>;
      });

      list = <ul style={{'display': 'block', 'listStyle': 'none'}}>{tweeds}</ul>;
    }

    return (
      <html>
        <head />
        <body>
          <h3 id='header'>Register or Log In to view Tweeds</h3>
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
        </body>
      </html>
      );
  }
}

module.exports = Home;