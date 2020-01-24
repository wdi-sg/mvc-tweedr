var React = require("react");
var DefaultLayout = require('../layouts/default');
var NavLayout = require('../layouts/navigation');
class ListTweets extends React.Component {
  render() {
    let tweets = this.props.tweets;
    const style = {
width: "100%",
minHeight: "50px",
backgroundColor: "rgba(0,0,255,0.1)"
};
    const tweetList = tweets.map((tweet)=>{
        return (<div className="mh-100 mb-2 mt-2" style={style}><p className="p-4">{tweet.message}</p></div>);
    });
    return (
        <DefaultLayout title="Tweets">
            <NavLayout loggedIn={this.props.loggedin}></NavLayout>
        <div className="container h-100">
    <div className="row h-100 justify-content-center align-items-center">
    <h1>Tweets</h1>
        {tweetList}
    </div>
    </div>
        </DefaultLayout>
    );
  }
}

module.exports = ListTweets;