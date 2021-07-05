const React = require("react");
const Layout = require("./layout");

class Delete extends React.Component {
  render() {
    console.log(this.props);
    const userID = this.props.tweed.user_id;
    const tweedID = this.props.tweed.id;
    const tweed = this.props.tweed.tweets;
    const deletePath = "/tweeds/" + tweedID + "?_method=delete";
    return (
      <Layout
        username={this.props.username}
        userID={this.props.userID}
        loggedIn={this.props.loggedIn}
      >
        <div className="container mt-5">
          <form action={deletePath} method="post">
            <div className="form-group">
              <h1>{tweed}</h1>
            </div>
            <button type="submit" className="btn btn-danger mb-2">
              Delete Tweed?
            </button>
          </form>
        </div>
      </Layout>
    );
  }
}

module.exports = Delete;
