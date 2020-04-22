var React = require("react");
var Main = require("../main-template");

class DisplayAllTweets extends React.Component {
  render() {
    let tweetArr = this.props.tweetArr;
    let link = "/tweets";

    let tweetArrHtml = tweetArr.map((element) => {
      let obj = { dateStyle: "full", timeStyle: "medium" };
      let timestampInt = parseInt(element.timestamp);
      let timestamp = new Date(timestampInt).toLocaleString("en-US", obj);
      let link2 = "/tweets/" + element.id;
      return (
        <tr>
          <td width="20%">{element.username}</td>
          <td width="40%"><a href={link2}>{element.content}</a></td>
          <td width="40%">{timestamp}</td>
        </tr>
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

              <table class="table table-striped">
                {/* <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead> */}
                <tbody>
                  {tweetArrHtml}
                </tbody>
              </table>

              <br></br>
            </form>
          </div>
        </div>
      </div>
    );

    return <Main children={displayAllTweet} />;
  }
}

module.exports = DisplayAllTweets;
