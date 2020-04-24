var React = require("react");
const Layout = require("./layout");

class New extends React.Component {
  render() {
    return (
      <Layout>
          <h1>Register for an account</h1>
          <div class="form">
            <form action="/register" method="POST">
              <div class="form-row">
                <span class="label-username">Username:</span><br></br>
                <input class="input-text" type="text" name="name"/>
              </div>
              <div class="form-row">
                <span class="label-password">Password:</span><br></br>
                <input class="input-text" type="text" name="password" />
              </div>
              <input class="button-submit" type="submit" />
            </form>
          </div>
      </Layout>
    );
  }
}

module.exports = New;
