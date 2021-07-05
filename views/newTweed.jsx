const React = require("react");
const Layout = require("./layout");

class Tweed extends React.Component {
  render() {
    return (
      <Layout
        username={this.props.username}
        userID={this.props.userID}
        loggedIn={this.props.loggedIn}
      >
        <div className="container mt-5">
          <form action="/tweed" method="post">
            <div className="form-group">
              <label>Write a Tweed!</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="tweed"
                placeholder="200 characters max!"
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

module.exports = Tweed;
