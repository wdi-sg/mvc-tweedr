const React = require("react");
const DefaultLayout = require('./layouts/default');


class User extends React.Component {
  render() {

    let user = this.props.user;
    let headerTitle = `${user.name} | Tweedr`;

    return (

      <DefaultLayout title={headerTitle} user={user}>
        <h2>Your page</h2>
        <p>{user.name}</p>
        <button>Edit Profile</button>

      </DefaultLayout>
    );

  }
}

module.exports = User;