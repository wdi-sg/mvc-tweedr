var React = require("react");
import Nav from "../components/nav";
import Head from "../components/header";
import BootstrapJs from "../components/bootstrap-js";

class Login extends React.Component {
  render() {

    return (
      <html>
        <Head />
        <body style={{backgroundColor: "#2b2d2f"}}>
          <Nav />
          <div className="jumbotron bg-dark">
            <h1>Register for Tweedr</h1>

            <form action="/register" method="post" className="form-inline">
              <div className="input-group mb-2 mr-sm-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">@</div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  name="handle"
                  placeholder="Username"
                />
              </div>


              <input
                type="text"
                className="form-control mb-2 mr-sm-2"
                name="display_name"
                placeholder="Display Name"
              />



              <input
                type="password"
                className="form-control mb-2 mr-sm-2"
                name="password"
                placeholder="Password"
              />

              <input
                type="text"
                className="form-control mb-2 mr-sm-2"
                name="dp_url"
                placeholder="Display Picture URL"
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

module.exports = Login;
