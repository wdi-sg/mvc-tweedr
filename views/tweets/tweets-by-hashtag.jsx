var React = require("react");
var Main = require("../main-template");

class TweetsByHashtag extends React.Component {
  render() {
    let tweetArr = this.props.tweetsArr;
    let tweetArrHtml;
    let link = "/hashtags/" + this.props.htId;
    console.log('before if block',tweetArr);
    if (tweetArr.length === 0) {
    tweetArrHtml = (<p>There are no tweets for this hashtag yet.</p>);
    } else {
      tweetArrHtml = tweetArr.map((element) => {
        let obj = { dateStyle: "full", timeStyle: "medium" };
        let timestampInt = parseInt(element.timestamp);
        let timestamp = new Date(timestampInt).toLocaleString("en-US", obj);
        let link2 = "/tweets/" + element.id;

        return (
          <div class="card bg-light mb-3">
            <div class="card-header">{timestamp}</div>
            <div class="card-body">
              <h6 class="card-title">
                <strong>{element.username}</strong>
              </h6>
              <p class="card-text">
                <em>
                  <a className="text-dark" href={link2}>
                    {element.content}
                  </a>
                </em>
              </p>
            </div>
          </div>
        );
      });
    }

    console.log(tweetArrHtml);
    

    const tweetByHashtag = (
      <div className="container">
        <div className="row">
          <div className="col mt-5">
            <form method="GET" action={link}>
              <h3>
                <u>Filter Tweets By Hashtag</u>
              </h3>
              <br></br>
              {tweetArrHtml}
            </form>
          </div>
        </div>
      </div>
    );

    return <Main children={tweetByHashtag} />;
  }
}

module.exports = TweetsByHashtag;
