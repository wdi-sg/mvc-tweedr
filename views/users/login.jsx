var React = require("react");
import Nav from "../components/nav";
import Head from "../components/header";
import BootstrapJs from "../components/bootstrap-js";

class Login extends React.Component {
  render() {

    return (
      <html>
        <Head />
        <body>
          <Nav />
          <div className="jumbotron">
            <h1>Login to Tweedr</h1>

            <form class="form-inline" action="/login" method="POST">
              <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">@</div>
                </div>
                <input
                  type="text"
                  class="form-control"
                  name="handle"
                  placeholder="Username"
                />
              </div>

              <input
                type="text"
                class="form-control mb-2 mr-sm-2"
                name="password"
                placeholder="Password"
              />

              <button type="submit" class="btn btn-primary mb-2">
                Login
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
