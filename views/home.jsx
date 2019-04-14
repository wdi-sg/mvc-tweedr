var React = require("react");
var DefaultLayout = require('./layouts/default');

class Profile extends React.Component {
  render() {
    return (
        <div className="col-3 profile">
            <img src="https://images-na.ssl-images-amazon.com/images/I/51Gji7jFNjL._SX425_.jpg"/>
            <div className="username">Godzilla</div>

            <div className="follow">
                <div>
                    <div className="header">TWEETS</div>
                    <div className="stats">50</div>
                </div>
                <div>
                    <div className="header">FOLLOWING</div>
                    <div className="stats">13</div>
                </div>
                <div>
                    <div className="header">FOLLOWERS</div>
                    <div className="stats">1</div>
                </div>
            </div>

            <div className="post">
                <form>
                    <input type="text" placeholder="Compose new Tweet..."/>
                    <input className="btn btn-primary" type="submit" value="Post"/>
                </form>
            </div>
        </div>
    );
  }
}

class Tweets extends React.Component {
  render() {
    let elements = this.props.tweets.map((item) => {
        return <div className="col-12 tweet">
                    <div className="username">{ item.users_username }</div>
                    <div className="content">{ item.content }</div>
                    <div className="footer">
                        <div className="date">Date: { item.created_at }</div>
                        <div className="reply">Reply</div>
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
                        <Profile/>
                        <Tweets tweets={this.props.tweets}/>
                    </div>
                </div>
            </DefaultLayout>
    );
  }
}

module.exports = Home;