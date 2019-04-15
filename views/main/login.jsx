var React = require("react");
var Layout = require('../layout/layout.jsx');

class Login extends React.Component {
  render() {


    return (
      <Layout>
            Log-in
            <form method="POST" action="/login">
                <input type="text" name="name" placeholder="name"/>
                <input type="text" name="password" placeholder="password"/>
                <input type="submit" value="Submit"/>
            </form>
        </Layout>
    );
  }
}

module.exports = Login;