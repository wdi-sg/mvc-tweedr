var React = require("react");
var DefaultLayout = require("./default");

class Home extends React.Component {
  render() {
    // console.log(this.props.tweets);
    console.log(this.props.tweets)
    let allTweets = this.props.tweets.map ( (tweet) => {
        console.log("inside map")
        console.log(tweet);
        return (
        <div className="card border-primary m-4" style={{width: 18 + "rem"}}>
            <div className="card-header">
                <img src={tweet.pic} style={{width: 40 + "px"}}/>
                <span className="ml-4">@{tweet.name}</span>
            </div>
            <div className="card-body text-primary">
                <h5 className="card-title">Tweet</h5>
                <p className="card-text">{tweet.message}</p>
            </div>
            <div className="card-footer">
                <small className="text-muted">{tweet.timestamp}</small>
                <a className="btn float-right" href={`tweet/edit`}>Edit</a>
                <a className="btn float-right" href={`tweet/del`}>Delete</a>
            </div>
        </div>
        );
    });
    return (
      <DefaultLayout>
        <h2>View tweets by:</h2>
        <form>
            <select name="filter-tweets">
                <option value="all">All</option>
                <option value="followers">Your followers</option>
                <option value="following">People you follow</option>
            </select>
            <input type="submit" value="submit"/>
        </form>
        <div className="card-deck">
            {allTweets}
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Home;
