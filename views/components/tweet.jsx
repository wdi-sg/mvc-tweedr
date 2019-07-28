var React = require('react');

class Tweet extends React.Component {
	render() {
		let dateObject = new Date(this.props.tweet.date_created);
		let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		let profileLink = "/users/"+this.props.tweet.username;
		return (
			<div className="card tweet">
				<div className="card-body">
					<h5 className="card-title"><a href={profileLink}>{this.props.tweet.username}</a></h5>
					<h6 className="card-subtitle mb-2 text-muted">{dateObject.getDate()} {months[dateObject.getMonth()]} {dateObject.getFullYear()}</h6>
					<p className="card-text">{this.props.tweet.content}</p>
				</div>
			</div>
		);
	}
}

module.exports = Tweet;