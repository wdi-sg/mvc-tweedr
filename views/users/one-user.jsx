var React = require("react");
import Nav from "../components/nav";
import Head from "../components/header";
import BootstrapJs from "../components/bootstrap-js";

class OneUser extends React.Component {
  render() {

      const profile = this.props.foundUser
      const moment = require("moment");
      moment().format();

      const createdOn = moment(profile.created_at).format("DD MMM YYYY");

    return (
      <html>
        <Head />
        <body>
          <Nav />

          <div className="general-container">
          <img src={profile.dp_url}></img>
            <h1>{profile.display_name}</h1>
            <h3>@{profile.handle}</h3>
            <p>Joined: {createdOn}
            </p>
          </div>
          <BootstrapJs />
        </body>
      </html>
    );
  }
}

module.exports = OneUser;
