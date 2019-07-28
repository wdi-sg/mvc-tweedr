var React = require('react');

class Profile extends React.Component {
	render() {
		let tweets = this.props.tweets.map((tweet) => {
			return (<li className="list-group-item">{tweet.content}</li>)
		});
		let followButton = "";
		let followLink = "";
		switch (this.props.follow) {
			case "follow":
				followLink = "../follow/" + this.props.user;
				followButton = (<div className="col-6 text-right">
					<form method="POST" action={followLink}>
						<button type="submit" className="btn btn-primary">Follow</button>
					</form>
				</div>);
				break;
			case "followed":
				followLink = "../follow/" + this.props.user;
				followButton = (<div className="col-6 text-right">
					<form method="POST" action={followLink}>
						<button type="submit" className="btn btn-primary">Unfollow</button>
					</form>
				</div>);
				break;
			case "please log in":
				followLink = "../?register";
				followButton = (<div className="col-6 text-right">
					<form method="POST" action={followLink}>
						<button type="submit" className="btn btn-primary">Follow</button>
					</form>
				</div>);
				break;
		}
		return (
			<div className="card tweet">
				<div className="card-body">
					<div className="row">
						<div className="col-6">
							<h5 className="card-title">{this.props.user}</h5>
						</div>
						{followButton}
					</div>

				</div>
				<ul className="list-group list-group-flush">
					{tweets}
				</ul>
			</div>
		);
	}
}

module.exports = Profile;