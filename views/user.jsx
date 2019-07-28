const React = require("react");
const DefaultLayout = require('./layouts/default');


class User extends React.Component {
  render() {

    let user = this.props.user;
    let headerTitle = `${user.name} | Tweedr`;

    return (

      <DefaultLayout title={headerTitle} user={user}>
        <h2>Your page</h2>
        <p>Name: {user.name}</p>
        <button>Edit Profile</button>
        <p>Your followers: 0</p>
        <p>Following: 0</p>
        <p>Tweets: </p>

      </DefaultLayout>
    );

  }
}

module.exports = User;