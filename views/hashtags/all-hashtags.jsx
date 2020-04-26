var React = require("react");
import Nav from "../components/nav";
import Head from "../components/header";
import BootstrapJs from "../components/bootstrap-js";

class NewHashtag extends React.Component {
  render() {


      const hashtagArr = this.props.hashtags;
      const hashtagLiElements = hashtagArr.map( hashtag => {
            return <li><a href={`/hashtags/${hashtag.hashtag_id}`}>{hashtag.hashtag_name}</a></li>
      })
    return (
      <html>
        <Head />
        <body>
          <Nav />
          <div className="jumbotron bg-dark">
            <h1>All Hashtags</h1>
          </div>

          <div className="general-container">
            <ul>{hashtagLiElements}</ul>
          </div>

          <BootstrapJs />
        </body>
      </html>
    );
  }
}

module.exports = NewHashtag;
