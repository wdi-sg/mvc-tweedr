var React = require("react");
var DefaultLayout = require("../layouts/default");
var Profile = require("../components/profile");
var ProfileOther = require("../components/profile-other");
var Dashboard = require("../components/dashboard");

class Home extends React.Component {
	render() {
		let profile = "";
		if (this.props.follow === "same user") {
			profile = (<Profile user={this.props.username} tweets={this.props.tweets}/>)
		}
		else {
			profile = (<ProfileOther user={this.props.username} follow={this.props.follow} tweets={this.props.tweets}/>)
		}
		return (
			<DefaultLayout>
				<div className="row">
					<div className="col-6 offset-1">
						{profile}
					</div>
					<div className="col-4">
						<div className="side-bar">
							<Dashboard username={this.props.loggedInUser}/>
						</div>
					</div>
				</div>
			</DefaultLayout>
		);
	}
}

module.exports = Home;
