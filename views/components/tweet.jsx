var React = require('react');

class Tweet extends React.Component {
	render() {
		return (
			<div className="card tweet">
				<div className="card-body">
					<h5 className="card-title">{this.props.tweet.username}</h5>
					<p className="card-text">{this.props.tweet.content}</p>
				</div>
			</div>
		);
	}
}

module.exports = Tweet;