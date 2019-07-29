var React = require("react");

class Home extends React.Component {
  render() {
    console.log(this.props.types);
    return (
      <html>
        <head />
        <body>
          <h3>TWEEDR</h3>
          {this.props.rows.map (tweets =>
            <div>
            <p>{tweets.user_id}</p>
            <p>{tweets.content}</p>
            </div>
            )}
        </body>
      </html>
    );
  }
}

module.exports = Home;