var React = require("react");
var Layout = require("./components/layout.jsx")

class Login extends React.Component {
  render() {
    console.log(this.props.types);
    return (
      <Layout>
      <h1>Lets get tweeding!</h1>
      <form action="/tweedr" method="post">
        <label>Username</label><br/>
        <input type="text" name="username"/><br/><br/>
        <label>Password</label><br/>
        <input type="text" name="password"/><br/><br/>
        <input type="hidden" name="status" value="true"/>
        <input type="submit" value="Welcome back!"/>
      </form>
      </Layout>
    );
  }
}

module.exports = Login;
