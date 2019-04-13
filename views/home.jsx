var React = require("react");
var DefaultLayout = require('./layouts/default');

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
        <div className="container tweets">

                <h3>Tweets</h3>
                { elements }

        </div>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
            <DefaultLayout title="Home">
                <Tweets tweets={this.props.tweets}/>
            </DefaultLayout>
    );
  }
}

module.exports = Home;