var React = require("react");
var DefaultLayout = require("./default");

class Home extends React.Component {
  render() {
    let allTweets = this.props.tweets.map ( (tweet) => {
        return (
            <div className="row w-100 mx-4 mt-4">
                <div className="col">
                    <div className="card border-primary">
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
                </div>
            </div>
        );
    });
    return (
      <DefaultLayout>
        <form class="input-group mx-4 mt-3 w-25">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">View</label>
            </div>
            <select class="custom-select" id="inputGroupSelect01" name="filterby">
                <option selected>Choose...</option>
                <option value="all">All tweets</option>
                <option value="followers">Tweets by who follows you only</option>
                <option value="following">Tweets by who you follow only</option>
            </select>
            <div class="input-group-append">
                <input class="btn btn-primary rounded-right" type="submit" value="submit"/>
            </div>

            <a className="btn btn-primary d-inline ml-4" href="/tweet/add">New tweet</a>
        </form>
        <div className="card-deck">
            {allTweets}
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Home;
