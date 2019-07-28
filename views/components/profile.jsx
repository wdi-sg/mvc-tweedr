var React = require('react');

class Profile extends React.Component {
	render() {
		let tweets = this.props.tweets.map((tweet) => {
			let editLink = `../edit/${this.props.user}/${tweet.id}`;
			let removeLink = `../delete/${this.props.user}/${tweet.id}`;
			return (
				<li className="list-group-item">
					<div className="row">
						<div className="col-10">{tweet.content}</div>
						<div className="col-1">
							<form className="form-inline justify-content-end" method="POST" action={editLink}>
								<button type="submit" className="btn btn-remove-tweet btn-link">
									<i className="fas fa-pen"></i>
								</button>
							</form>
						</div>
						<div className="col-1">
							<form className="form-inline justify-content-end" method="POST" action={removeLink}>
								<button type="submit" className="btn btn-remove-tweet btn-link">
									<i className="fas fa-trash"></i>
								</button>
							</form>
						</div>
					</div>
				</li>);
		});

		return (
			<div className="card tweet">
				<div className="card-body">
					<div className="row">
						<div className="col-6">
							<h5 className="card-title">{this.props.user}</h5>
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