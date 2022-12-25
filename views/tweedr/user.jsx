var React = require("react");
var Head = require("../head")
var Navbar = require("../navbar")

class User extends React.Component {
  render() {
    let editButton;
    if (this.props.edit === true) {
        let hrefStr = "/users/" + this.props.profile.id + "/edit";
        editButton = <button><a href={hrefStr}>Edit Profile</a></button>
    }
    return (
      <html>
        <Head />
        <body>
            <div className="container">
                <Navbar />
                <h2>{this.props.profile.name}</h2>
                {/*<img src={this.props.profile.photo}/>*/}
                <label>Description :</label>
                <p>{this.props.profile.description}</p>
                {editButton}
            </div>
        </body>
      </html>
    );
  }
}

module.exports = User;