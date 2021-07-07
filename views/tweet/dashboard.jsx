var React = require("react");
var DefaultLayout = require("../layouts/default");
var Tweet = require("../components/tweet");
var Dashboard = require("../components/dashboard");

class Home extends React.Component {
	render() {
		let tweets = this.props.allTweets.map((tweet) => {
			return (<Tweet tweet={tweet}/>)
		});
		let tweetTab = (
			<nav className="nav nav-tabs nav-fill mb-3">
				<a className="nav-item nav-link active" href="/">All Tweets</a>
				<a className="nav-item nav-link" href="/tweets/following">Following's Tweets</a>
				<a className="nav-item nav-link" href="/tweets/followers">Follower's Tweets</a>
			</nav>
		);
		if (this.props.tweets === "following") {
			tweetTab = (
				<nav className="nav nav-tabs nav-fill mb-3">
					<a className="nav-item nav-link" href="/">All Tweets</a>
					<a className="nav-item nav-link active" href="/tweets/following">Following's Tweets</a>
					<a className="nav-item nav-link" href="/tweets/followers">Follower's Tweets</a>
				</nav>
			);
		}
		else if (this.props.tweets === "follower") {
			tweetTab = (
				<nav className="nav nav-tabs nav-fill mb-3">
					<a className="nav-item nav-link" href="/">All Tweets</a>
					<a className="nav-item nav-link" href="/tweets/following">Following's Tweets</a>
					<a className="nav-item nav-link active" href="/tweets/followers">Follower's Tweets</a>
				</nav>
			);
		}
		return (
			<DefaultLayout>
				<div className="row">
					<div className="col-6 offset-1">
						{tweetTab}
						{tweets}
					</div>
					<div className="col-4">
						<div className="side-bar">
							<Dashboard username={this.props.username}/>
						</div>
					</div>
				</div>
			</DefaultLayout>
		);
	}
}

module.exports = Home;
