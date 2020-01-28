var React = require("react");
var Head = require("../head")
var Navbar = require("../navbar")

class Tweeds extends React.Component {
  render() {
    let msgElements = this.props.messages.map(message => {
        return (<p>{message.message}</p>)
    })
    return (
      <html>
        <Head />
        <body>
            <div className="container">
                <Navbar />
                <h1>Tweeds</h1>
                <div>
                    {msgElements}
                </div>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Tweeds;