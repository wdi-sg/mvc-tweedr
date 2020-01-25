const React = require("react");
const Layout = require("./layout");

class Index extends React.Component {
  render() {
    let tweedElement;
    let header;
    if (this.props.tweeds !== undefined) {
      header = <h3>My Tweets</h3>;
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
        <div className="container">
          {header}
          {tweedElement}
        </div>
      </Layout>
    );
  }
}

module.exports = Index;
