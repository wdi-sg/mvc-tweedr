const React = require("react");
const Layout = require("./layout");

class Edit extends React.Component {
  render() {
    console.log(this.props);
    const userID = this.props.tweed.user_id;
    const tweedID = this.props.tweed.id;
    const tweed = this.props.tweed.tweets;
    const editPath = "/tweeds/" + tweedID + "?_method=put";
    return (
      <Layout
        username={this.props.username}
        userID={this.props.userID}
        loggedIn={this.props.loggedIn}
      >
        <div className="container mt-5">
          <form action={editPath} method="post">
            <div className="form-group">
              <label>Edit tweed!</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="tweed"
                placeholder={tweed}
                maxLength="200"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary mb-2">
              Tweed!
            </button>
          </form>
        </div>
      </Layout>
    );
  }
}

module.exports = Edit;
