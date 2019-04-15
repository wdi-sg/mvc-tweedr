var React = require("react");
var Layout = require('../layout/layout.jsx');

class Profile extends React.Component {
  render() {


    let name = this.props.user.name;
    let id = this.props.user.id;

    let action = `/users/${id}`;


    return (
      <Layout>
          <h3>TWEEDR PROFILE</h3>
          <p>Name: {name}</p>

            <form method="POST" action={action}>
                <input type="text" name="content" placeholder="Tweed something..."/>
                <input type="submit" value="Submit"/>
            </form>
       </Layout>
    );
  }
}

module.exports = Profile;