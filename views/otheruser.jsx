const React = require("react");
const DefaultLayout = require('./layouts/default');


class OtherUser extends React.Component {
  render() {

    let user = this.props.user;
    let otherUser = this.props.otherUser;

    let followURL = `/users/${otherUser.id}`
    let headerTitle = `${otherUser.name} | Tweedr`;


    return (

      <DefaultLayout title={headerTitle} user={user}>
        <h2>Other people's page</h2>
        <p>{otherUser.name}</p>
        <form method="POST" action={followURL}>
            <input type={"hidden"} name={"follower_user_id"} value={user.id} />
            <input type={"hidden"} name={"user_id"} value={otherUser.id} />
            <button tpye={"submit"}>Follow</button>
        </form>
      </DefaultLayout>
    );

  }
}

module.exports = OtherUser;