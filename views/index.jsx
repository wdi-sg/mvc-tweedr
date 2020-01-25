const React = require("react");
const Layout = require("./layout");

class Index extends React.Component {
  render() {
    let tweedElement;
    if (this.props.tweeds !== undefined) {
      const tweeds = this.props.tweeds;
      tweedElement = tweeds.map(tweed => {
        return <p>{tweed.tweets}</p>;
      });
    }

    return (
      <Layout
        username={this.props.username}
        userID={this.props.userID}
        loggedIn={this.props.loggedIn}
      >
        <div className="container">{tweedElement}</div>
      </Layout>
    );
  }
}

module.exports = Index;
