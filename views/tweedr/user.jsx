var React = require("react");
var Head = require("../head")
var Navbar = require("../navbar")

class User extends React.Component {
  render() {

    return (
      <html>
        <Head />
        <body>
            <div className="container">
                <Navbar />
                <h2>{this.props.username}</h2>
                <h2>{this.props.name}</h2>
                <img src={this.props.photo}/>
                <p>{this.props.description}</p>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = User;