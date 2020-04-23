var React = require("react");
var Main = require("../main-template");

class DisplayAllTweets extends React.Component {
  render() {
    let tweetArr = this.props.tweetsArr;
    let link = "/tweets";

    let tweetArrHtml = tweetArr.map((element) => {
      let obj = { dateStyle: "full", timeStyle: "medium" };
      let timestampInt = parseInt(element.timestamp);
      let timestamp = new Date(timestampInt).toLocaleString("en-US", obj);
      let link2 = "/tweets/" + element.id;

      let htArrHtml = element.htArr.map((ht) => {
        let link3 = "/hashtags/" + ht.ht_id;
        return (
          <span>
            <a href={link3}>{ht.tag}</a>
            {`  `}
          </span>
        );
      });

      return (
        <div class="card bg-light mb-3">
          <div class="card-header">{timestamp}</div>
          <div class="card-body">
            <h6 class="card-title">
              <strong>{element.username}</strong>
            </h6>
            <p class="card-text">
              <em>
                <a className="text-dark" href={link2}>{element.content}</a>
              </em>
            </p>
            <p>{htArrHtml}</p>
          </div>
        </div>
      );
    });

    const displayAllTweet = (
      <div className="container">
        <div className="row">
          <div className="col mt-5">
            <form method="GET" action={link}>
              <h3>
                <u>All Tweets</u>
              </h3>
              <br></br>

              {tweetArrHtml}

            </form>
          </div>
        </div>
      </div>
    );

    return <Main children={displayAllTweet} />;
  }
}

module.exports = DisplayAllTweets;
