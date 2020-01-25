const React = require("react");
const Layout = require("./layout");

class Tweed extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Layout>
        <div className="container">
          <h2>{this.props.user.username} tweeded:</h2>
          {this.props.tweed.tweets}
        </div>
      </Layout>
    );
  }
}
module.exports = Tweed;
