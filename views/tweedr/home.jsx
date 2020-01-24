var React = require("react");
var Head = require("../head")
var Navbar = require("../navbar")

class Home extends React.Component {
  render() {
    console.log(this.props.allUsers)
    return (
      <html>
        <Head />
        <body>
            <Navbar />
            <h1>WELCOME TO TWEEDR</h1>
        </body>
      </html>
    );
  }
}

module.exports = Home;