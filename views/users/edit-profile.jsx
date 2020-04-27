var React = require("react");
import Nav from "../components/nav";
import Head from "../components/header";
import BootstrapJs from "../components/bootstrap-js";

class EditProfile extends React.Component {
  render() {
    const user = this.props.currentUser;

    return (
      <html>
        <Head />
        <body style={{ backgroundColor: "#2b2d2f" }}>
          <Nav />
          <div className="jumbotron">
            <h1>Update your details!</h1>

            <form
              action="/users/me?_method=put"
              method="post"
              className="form-inline"
            >
              <div className="input-group mb-2 mr-sm-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">@</div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  name="handle"
                  placeholder="Username"
                  value={user.handle}
                />
              </div>

              <input
                type="text"
                className="form-control mb-2 mr-sm-2"
                name="display_name"
                placeholder="Display Name"
                value={user.display_name}
              />

              <input
                type="password"
                className="form-control mb-2 mr-sm-2"
                name="password"
                placeholder="Password"
                value={user.hashed_pw}
              />

              <input
                type="text"
                className="form-control mb-2 mr-sm-2"
                name="dp_url"
                placeholder="Display Picture URL"
                value={user.dp_url}
              />

              <button type="submit" className="btn btn-primary mb-2">
                Register
              </button>
            </form>
          </div>

          <BootstrapJs />
        </body>
      </html>
    );
  }
}

module.exports = EditProfile;
