var React = require("react");
var Main = require("../main-template");

class DisplayOneTweet extends React.Component {
  render() {
    let tweet = this.props.tweet;
    let link = "/tweets/" + tweet.id;
    let obj = { dateStyle: "full", timeStyle: "medium" };
    let timestampInt = parseInt(tweet.timestamp);
    let timestamp = new Date(timestampInt).toLocaleString("en-US", obj);
    // console.log(timestamp);

    const displayOneTweet = (
      <div className="container">
        <div className="row">
          <div className="col mt-5">
            <form method="GET" action={link}>
              <h3>
                <u>Tweet</u>
              </h3>
              <br></br>
              <ul>
                <li>Id: {tweet.id}</li>
                <li>{tweet.content}</li>
                <li>{timestamp}</li>
              </ul>
              <br></br>
            </form>
          </div>
        </div>
      </div>
    );

    return <Main children={displayOneTweet} />;
  }
}

module.exports = DisplayOneTweet;
