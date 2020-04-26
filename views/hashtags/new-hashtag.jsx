var React = require("react");
import Nav from "../components/nav";
import Head from "../components/header";
import BootstrapJs from "../components/bootstrap-js";

class NewHashtag extends React.Component {
  render() {
    return (
      <html>
        <Head />
        <body style={{ backgroundColor: "#2b2d2f" }}>
          <Nav />
          <div className="jumbotron bg-dark">
            <h1>Create a new Tweedr hashtag</h1>

            <form action="/hashtags" method="post" className="form-inline">
              <div className="input-group mb-2 mr-sm-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">#</div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  name="hashtagName"
                  placeholder="Hashtag name"
                />
              </div>

              <button type="submit" className="btn btn-primary mb-2">
                Create
              </button>
            </form>
          </div>

          <BootstrapJs />
        </body>
      </html>
    );
  }
}

module.exports = NewHashtag;
