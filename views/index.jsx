const React = require("react");
const Layout = require("./layout");

class Index extends React.Component {
  render() {
    let tweedElement;
    let header;
    console.log(this.props);
    if (this.props.tweeds !== undefined) {
      header = <h3>My Tweets</h3>;
      const tweeds = this.props.tweeds;
      tweedElement = tweeds.map(tweed => {
        const tweetLink = "/tweeds/" + tweed.id;
        return (
          <p>
            <a className="mr-3" href={tweetLink}>
              {tweed.tweets}
            </a>{" "}
            <span>
              <em>{tweed.created_at.toString()}</em>
            </span>
          </p>
        );
      });
    }

    return (
      <Layout
        username={this.props.username}
        userID={this.props.userID}
        loggedIn={this.props.loggedIn}
      >
        <div className="container">
          <h1 className="display-1 text-center">Tweedr</h1>
          {header}
          {tweedElement}
        </div>
      </Layout>
    );
  }
}

module.exports = Index;
