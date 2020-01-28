var React = require("react");
var Head = require("../head")
var Navbar = require("../navbar")

class Tweed extends React.Component {
  render() {
    return (
      <html>
        <Head />
        <body>
            <Navbar />
            <h1>Tweed</h1>
                <p>{this.props.message}</p>
        </body>
      </html>
    );
  }
}

module.exports = Tweed;