const React = require("react");
const Layout = require("./layout");

class Error extends React.Component {
  render() {
    return (
      <Layout
        username={this.props.username}
        userID={this.props.userID}
        loggedIn={this.props.loggedIn}
      >
        <div className="container">
          <h1 className="text-center mt-5">Error!</h1>
          <p className="text-center">{this.props.errorMessage}</p>
        </div>
      </Layout>
    );
  }
}

module.exports = Error;
