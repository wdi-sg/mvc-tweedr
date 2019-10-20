var React = require('react');

class Usertweets extends React.Component {
	render() {
		console.log('in all tweets page!!!!');
		console.log(this.props);
		let displayTweets = this.props.allTweets.map((user) => {
			return (
				<p>
					@{user.username}
					<br />
					Tweets: {user.tweets}
				</p>
			);
		});
		return (
			<html>
				<head>
					<link
						rel="stylesheet"
						href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
						integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
						crossorigin="anonymous"
					/>
				</head>
				<body class="bg-primary">
					<div class="container text-center text-white">
						<h1>Your Tweeder homepage</h1>
						<hr />
						{displayTweets}
					</div>
				</body>
			</html>
		);
	}
}

module.exports = Usertweets;
