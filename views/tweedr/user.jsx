var React = require("react");
var Head = require("../head")
var Navbar = require("../navbar")

class User extends React.Component {
  render() {
    let editButton;
    if (this.props.edit === true) {
        let hrefStr = "/users/" + this.props.profile.id + "/edit";
        editButton = <button><a href={hrefStr}>Edit</a></button>
    }
    return (
      <html>
        <Head />
        <body>
            <div className="container">
                <Navbar />
                <h2>{this.props.profile.name}</h2>
                {editButton}
                {/*<img src={this.props.profile.photo}/>*/}
                <label>Description :</label>
                <p>{this.props.profile.description}</p>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = User;