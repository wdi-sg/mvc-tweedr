var React = require('react');

class Profile extends React.Component {
	render() {
		let profileLink = "/users/" + this.props.user;
		let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		let tweets = this.props.tweets.map((tweet) => {
			let dateObject = new Date(tweet.date_created);
			return (<li className="list-group-item">
				<h5><a href={profileLink}>{tweet.username}</a></h5>
				<h6 className="mb-2 text-muted">{dateObject.getDate()} {months[dateObject.getMonth()]} {dateObject.getFullYear()}</h6>
				<p className="card-text">{tweet.content}</p>
			</li>)
		});
		let followButton = "";
		let followLink = "";
		let followingLink = "/users/"+this.props.user+"/following";
		let followerLink = "/users/"+this.props.user+"/follower";
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

		}
		return (
			<div className="card tweet">
				<div className="card-body">
					<div className="row">
						<div className="col-6">
							<h5 className="card-title">{this.props.user}</h5>
							<a href={followingLink}>Following</a><br/>
							<a href={followerLink}>Followers</a>
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