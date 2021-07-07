var React = require('react');

class Profile extends React.Component {
	render() {
		let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		let followingLink = "/users/"+this.props.user+"/following";
		let followerLink = "/users/"+this.props.user+"/follower";
		let tweets = this.props.tweets.map((tweet) => {
			let dateObject = new Date(tweet.date_created);
			let profileLink = "/users/" + tweet.username;
			let editLink = `../edit/${this.props.user}/${tweet.id}`;
			let removeLink = `../delete/${this.props.user}/${this.props.id}?_method=DELETE`;
			return (
				<li className="list-group-item">
					<div className="row">
						<div className="col-10">
							<h5><a href={profileLink}>{tweet.username}</a></h5>
							<h6 className="mb-2 text-muted">{dateObject.getDate()} {months[dateObject.getMonth()]} {dateObject.getFullYear()}</h6>
							<p className="card-text">{tweet.content}</p>
						</div>
						<div className="col-1">
							<a href={editLink}>
								<button type="submit" className="btn btn-remove-tweet btn-link">
									<i className="fas fa-pen"></i>
								</button>
							</a>
						</div>
						<div className="col-1">
							<form className="form-inline justify-content-end" method="POST" action={removeLink}>
								<button type="submit" className="btn btn-remove-tweet btn-link">
									<i className="fas fa-trash"></i>
								</button>
							</form>
						</div>
					</div>
				</li>
			)
		});
		return (
			<div className="card">
				<div className="card-body">
					<div className="row">
						<div className="col-6">
							<h5 className="card-title">{this.props.user}</h5>
							<a href={followingLink}>Following</a><br/>
							<a href={followerLink}>Followers</a>
						</div>
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