var React = require("react");
import Nav from "../components/nav";
import Head from "../components/header";
import BootstrapJs from "../components/bootstrap-js";

class AllUsers extends React.Component {
  render() {

      const users = this.props.users

      const usersList = users.map ( user => {
            return (
              <div className="bg-dark user-card card col-lg-4 col-md-6 col-sm-12">
                <img
                  className="card-img-top"
                  src={user.dp_url}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{user.display_name}</h5>
                  <a href={`/users/${user.user_id}`}>
                    <button className="btn btn-outline-light">@{user.handle}</button>
                  </a>
                  <form action={`/users/following`} method="post">
                    <input
                      type="hidden"
                      name="userToFollow"
                      value={user.user_id}
                    />
                    <button type="submit" className="btn btn-success">
                      Follow
                    </button>
                  </form>
                </div>
              </div>
            );
      })


    return (
      <html>
        <Head />
        <body>
          <Nav />

          <div className="general-container">
            <h1>Showing All Users</h1>

            <div className="container">
            <div className="row">
            {usersList}
            </div>
            </div>
          </div>

          <BootstrapJs />
        </body>
      </html>
    );
  }
}

module.exports = AllUsers;
