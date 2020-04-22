var React = require("react");
var Main = require("../main-template");

class DisplayOneTweet extends React.Component {
  render() {
    let tweet = this.props.tweet;
    link = "/tweets/" + tweet.id;
    timestamp = tweet.timestamp.toString();
    console.log(timstamp);

    const newTweet = (
      <div className="container">
        <div className="row">
          <div className="col mt-5">
            <form method="GET" action={link}>
              <h3>
                <u>Tweet</u>
              </h3>
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

    return <Main children={newTweet} />;
  }
}

module.exports = DisplayOneTweet;
