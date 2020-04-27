var React = require("react");

class AllTweets extends React.Component {
  render() {
    const allTweets = this.props.tweetDetails.map((eachTweet) => {
      return (
        <div class="eachTweet">
          <h3>{eachTweet.tweedr_msg}</h3>
          <p>-{eachTweet.name}-</p>
          <input type="hidden" value={eachTweet.id}></input>
          <button class="like">like</button>

          <br />
        </div>
      );
    });
    return (
      <html>
        <script defer src="./allTweet-script.js" />
        <head />
        <body>
          <h1>All tweet</h1>
          {allTweets}
        </body>
      </html>
    );
  }
}

module.exports = AllTweets;
