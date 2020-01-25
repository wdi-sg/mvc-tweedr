const React = require("react");
const Layout = require("./layout");

class User extends React.Component {
  render() {
    let followButton;
    const username = this.props.user.username;
    const userID = this.props.user.id;
    const currentUser = this.props.currentUser;

    const followPath = "/users/" + userID + "/follow";
    if (username !== currentUser) {
      followButton = <button className="btn btn-primary">Follow</button>;
    }

    return (
      <Layout>
        <div className="container d-flex justify-content-center">
          <h2 className="d-inline mr-2">{username}'s Page</h2>
          <a href={followPath}>{followButton}</a>
        </div>
      </Layout>
    );
  }
}

module.exports = User;
