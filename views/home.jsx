var React = require("react");
var DefaultLayout = require('./layouts/default');

class Profile extends React.Component {
  render() {
    return (
        <div className="col-3 profile">
            <img src={ this.props.userProfile.img_url }/>
            <div className="username">{ this.props.userProfile.username }</div>

            <div className="follow">
                <div>
                    <div className="header">TWEETS</div>
                    <div className="stats">{ this.props.userTweetCount }</div>
                </div>
                <div>
                    <div className="header">FOLLOWING</div>
                    <div className="stats">13</div>
                </div>
                <div>
                    <div className="header">FOLLOWERS</div>
                    <div className="stats">10</div>
                </div>
            </div>

            <div className="tweet">
                <form action="/tweet" method="POST">
                    <input type="text" className="form-control content" name="tweet" placeholder="Compose new Tweet..."/>
                    <input className="btn btn-primary" type="submit" value="Post" disabled/>
                </form>
            </div>
        </div>
    );
  }
}

class TweetEdit extends React.Component {
  render() {
    if (this.props.tweetUser === this.props.userProfile.username) {
        let element = <a className="edit" href="#">Edit</a>

        return (
            <span>
                { element }
            </span>
        );
    }

    return (null);
  }
}

class TweetDelete extends React.Component {
  render() {
    if (this.props.tweetUser === this.props.userProfile.username) {
        let element = <a className="delete" href="#">Delete</a>

        return (
            <span>
                { element }
            </span>
        );
    }

    return (null);
  }
}

class Tweets extends React.Component {
  render() {
    let elements = this.props.tweets.map((item) => {
        return <div className="col-12 tweet">
                    <img src= { item.img_url }/>
                    <div className="username">{ item.users_username }</div>
                    <div className="content">{ item.content }</div>
                    <div className="footer">
                        <div className="date">Date: { item.created_at }</div>
                        <div>
                            <TweetEdit tweetUser= { item.users_username } userProfile= {this.props.userProfile}/>
                            <TweetDelete tweetUser= { item.users_username } userProfile= {this.props.userProfile}/>
                        </div>
                    </div>
               </div>
    });

    return (
        <div className="col-7 tweets">
            <h3>Tweets</h3>
            { elements }
        </div>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
        <DefaultLayout title="Home" login="true">
            <div className="container">
                <div className="row">
                    <Profile userProfile={this.props.userProfile} userTweetCount={this.props.userTweetCount}/>
                    <Tweets tweets={this.props.tweets} userProfile={ this.props.userProfile }/>
                </div>
            </div>
        </DefaultLayout>
    );
  }
}

module.exports = Home;