var React = require("react");
import Nav from "../components/nav";
import Head from "../components/header";
import BootstrapJs from "../components/bootstrap-js";

class Login extends React.Component {
  render() {

      const tweet = this.props.tweetData
    return (
      <html>
        <Head />
        <body>
          <Nav />
          <div className="jumbotron bg-dark">
            <h1>Edit Your Tweet</h1>

            <form action={`/tweets/${tweet.tweet_id}?_method=put`} method="post" className="form-inline">


            <textarea name="tweet" value={tweet.body}>

            </textarea>
            

              <button type="submit" className="btn btn-outline-light mb-2">
                Save Changes
              </button>
            </form>
          </div>

          <BootstrapJs />
        </body>
      </html>
    );
  }
}

module.exports = Login;
