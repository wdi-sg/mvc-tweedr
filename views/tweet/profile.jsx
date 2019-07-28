var React = require("react");
var DefaultLayout = require("../layouts/default");
var Tweet = require("../components/tweet");
var Profile = require("../components/profile");
var Dashboard = require("../components/dashboard");

class Home extends React.Component {
	render() {
		return (
			<DefaultLayout>
				<div className="row">
					<div className="col-6 offset-1">
						<Profile user={this.props.username} follow={this.props.follow} tweets={this.props.tweets}/>
					</div>
					<div className="col-4">
						<Dashboard username={this.props.loggedInUser}/>
					</div>
				</div>
			</DefaultLayout>
		);
	}
}

module.exports = Home;
