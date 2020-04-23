var React = require("react");
var Main = require("../main-template");

class DisplayOneTweet extends React.Component {
  render() {
    let tweetArr = this.props.tweetArr;
    let link = "/tweets/" + tweetArr[0].id;
    let obj = { dateStyle: "full", timeStyle: "medium" };
    let timestampInt = parseInt(tweetArr[0].timestamp);
    let timestamp = new Date(timestampInt).toLocaleString("en-US", obj);

    let htArrHtml = tweetArr.map((ele) => {
      let link2 = "/hashtags" + ele.ht_id;
      return (
        <li>
          <a href={link2}>{ele.tag}</a>
        </li>
      );
    });

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
                <li>Id: {tweetArr[0].id}</li>
                <li>{tweetArr[0].content}</li>
                <li>{timestamp}</li>
                {htArrHtml}
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
