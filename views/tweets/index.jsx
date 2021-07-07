var React = require("react");

class Home extends React.Component {
  render() {
    console.log(this.props.types);
    return (
      <html>
        <head />
        <body>
          <h3>Hello</h3>
          <div className="username">{ this.props.tweets[0].content }</div>

        </body>
      </html>
    );
  }
}

module.exports = Home;
