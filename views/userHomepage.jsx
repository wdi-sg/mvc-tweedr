var React = require("react");

class UserHome extends React.Component {
  render() {
    console.log(this.props.types);
    return (
      <html>
        <head />
        <body>
          <h1>MY HOMEPAGE</h1>
          {this.props.rows.map (tweets =>
            <div>
            <h3>{tweets.username}</h3>
            <p>{tweets.content}</p>
            </div>
            )}
        </body>
      </html>
    );
  }
}

module.exports = UserHome;