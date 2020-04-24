var React = require("react");
import Nav from "../components/nav";
import Head from "../components/header";
import BootstrapJs from "../components/bootstrap-js";

class Home extends React.Component {
  render() {

    const user = this.props.currentUser


    const tweetOptions = (tweetId) => {
      return (
        <div className="tweet-body-bottom">
          <div className="tweet-options float-right">
            <a href={`/tweets/${tweetId}/edit`}>
              <button className="btn btn-outline-warning btn-sm">✎</button>
            </a>

            <form action={`/tweets/${tweetId}?_method=delete`} method="post">
            <input name="tweetId" value={tweetId} type="hidden"/>
              <button className="btn btn-outline-danger btn-sm">╳</button>
            </form>
          </div>
        </div>
      );
    }

          const moment = require("moment");
          moment().format();

      const tweets = this.props.tweets;
      const tweetsList = tweets.map (tweet => {

            return (
              <div key={tweet.tweet_id} className="tweet">
                <div className="tweet-dp">
                  <img src={tweet.dp_url} />
                </div>

                <div className="tweet-body">
                  <div className="tweet-body-top clearfix">
                    <div className="tweet-body-user float-left">
                      <a
                        className="text-light"
                        href={`/users/${tweet.user_id}`}
                      >
                        {tweet.display_name}
                      </a>
                      <span className="tweet-handle text-secondary">
                        @{tweet.handle}
                      </span>
                    </div>
                    <div className="timestamp text-secondary float-right">
                      {moment(tweet.created_at).format("DD MMM YY | LTS")}
                    </div>
                  </div>
                  <div className="tweet-body-content">{tweet.body}</div>
                  {tweet.user_id===user.user_id && tweetOptions(tweet.tweet_id)}
                </div>
              </div>
            );
      })

    return (
      <html>
        <Head />
        <body>
          <Nav />
          <div className="outer-container container-fluid">
            <div className="row">
              <div className="sidebar col-md-2 col-sm-12">


                  <div className="sidebar-dp">
                    <img src={user.dp_url} />
                  </div>

                  <div id="sidebar-displayname">
                    <a href="/users/me">{user.display_name}</a>
                  </div>
                  <div id="sidebar-handle">
                    <a href="/users/me">@{user.handle}</a>
                  </div>

                  <div className="sidebar-follows">
                    <div id="sidebar-following">
                      <a href="/users/following">Following</a>
                    </div>
                    <div id="sidebar-following">
                      <a href="/users/followers">Followers</a>
                    </div>
                </div>
              </div>

              <div className="right-display col-md-10 col-sm-12">
                <div className="new-tweet row">
                  <div className="new-tweet-top clearfix">
                    <div id="new-tweet-greeting" className="float-left">
                      {this.props.tweetGreeting}, {user.display_name}. What's
                      going on?
                    </div>
                    <div id="character-counter" className="float-right">
                      0/140
                    </div>
                  </div>

                  <form action="/tweets" method="post">
                    <textarea name="tweetbody" rows="3" cols="190"></textarea>
                    <div className="new-tweet-bottom">
                      {/* <button
                        id="new-tweet-photo"
                        className="btn btn-outline-light btn-lg float-left"
                        href="#"
                      >
                        Add Photo
                      </button> */}
                      <button
                        type="submit"
                        className="btn btn-outline-primary btn-lg float-right"
                      >
                        Tweed
                      </button>
                    </div>
                  </form>
                </div>

                <div className="display-feed row">
                  <div className="feed-top">
                    <div id="feed-header" className="float-left">
                      YOUR FEED
                    </div>

                    <div id="feed-sort" className="float-right">
                      <label htmlFor="sort-type">SORT TWEETS BY:</label>
                      <select className="select-sort" name="sort-type">
                        <option value="name">Name</option>
                        <option value="date">Date</option>
                      </select>
                    </div>
                  </div>

                  <div className="feed-tweets">{tweetsList}</div>
                </div>
              </div>
            </div>
          </div>

          <BootstrapJs />
        </body>
      </html>
    );
  }
}

module.exports = Home;
