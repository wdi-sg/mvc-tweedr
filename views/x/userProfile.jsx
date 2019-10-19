var React = require("react");


class Home extends React.Component {
  render() {
    let username = this.props.username;

    return (
      <html>
        <head />
        <body>
          <h2>Profile page</h2>
          <h3>Welcome, {username}!</h3>
          <form method="GET" action="/" style={{margin: 20+'px'}}>
            <input type="submit" value="Home"/>
          </form>
          <form method="POST" action="/home">
            <input type="text" name="tweed" placeholder="What's on your mind?" style={{width: 20 + '%'}}/><br/>
            <input type="submit" value="Tweed"/>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Home;