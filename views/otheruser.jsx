const React = require("react");
const DefaultLayout = require('./layouts/default');


class OtherUser extends React.Component {
  render() {

    let user = this.props.user;
    let otherUser = this.props.otherUser;
    let headerTitle = `${otherUser.name} | Tweedr`;


    return (

      <DefaultLayout title={headerTitle} user={user}>
        <h2>Other people's page</h2>
        <p>{otherUser.name}</p>
        <button>Follow</button>

      </DefaultLayout>
    );

  }
}

module.exports = OtherUser;