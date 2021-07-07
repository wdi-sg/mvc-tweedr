var React = require("react");
var DefaultLayout = require("../layouts/default");
var Dashboard = require("../components/dashboard");

class Home extends React.Component {
	render() {
		let userLink = "/users/"+this.props.username;
		let following = "";
		let count = "";
		if (this.props.following) {
			count = this.props.following.length;
			following = this.props.following.map((following) => {
				let profileLink = "/users/"+following.username;
				return (
					<li className="list-group-item">
						<h5><a href={profileLink}>{following.username}</a></h5>
					</li>
				)
			});
		}
		else {
			count = 0;
			following = (
				<li className="list-group-item">
					<h5>This user have no following.</h5>
				</li>
			)
		}
		return (
			<DefaultLayout>
				<div className="row">
					<div className="col-6 offset-1">
						<div className="card">
							<div className="card-body">
								<div className="row">
									<div className="col-6">
										<h3><a href={userLink}>{this.props.username}</a>'s Following ({count})</h3>
									</div>
								</div>
							</div>
							<ul className="list-group list-group-flush">
								{following}
							</ul>
						</div>
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
