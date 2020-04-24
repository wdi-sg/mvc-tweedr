var React = require("react");
const Layout = require("./layout");

class Home extends React.Component {
  render() {
    console.log(this.props.username, "jsx file");
    return (
      <Layout>
          <h1>Welcome back, {this.props.username}</h1>
      </Layout>
    );
  }
}

module.exports = Home;
