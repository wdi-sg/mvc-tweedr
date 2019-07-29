var React = require("react");
var Layout = require('../layout/layout.jsx');

class Login extends React.Component {
  render() {
    return (
        <Layout>

            <div class="container">

                <h1>Login</h1>

                <form method="POST" action="/login">

                      <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" class="form-control" name="username" placeholder="Username"/>
                      </div>

                      <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" name="password" placeholder="Password"/>
                      </div>

                      <button type="submit" class="btn btn-secondary">Submit</button>
                </form>
            </div> {/* closing main body container */}
        </Layout>
    );
  }
}

module.exports = Login;