var React = require("react");
var Head = require("../head")
var Navbar = require("../navbar")

class Users extends React.Component {
  render() {
    let userElements = this.props.users.map(user => {
        let userLink = "/users/"+user.id;
        return (<p><a href={userLink}>{user.username}</a></p>)
    })
    return (
      <html>
        <Head />
        <body>
            <div className="container">
                <Navbar />
                <h1>Tweeds</h1>
                <div>
                    {userElements}
                </div>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Users;