var React = require("react");

class Home extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <form action="/" method="POST">
            <input type="text" name="text" placeholder="Tweet"/>
            <input type="submit"/>
          </form>
          {this.props.text}
        </body>
      </html>
    );
  }
}

module.exports = Home;
