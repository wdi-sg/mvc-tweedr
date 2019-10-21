var React = require('react');

class Usertweets extends React.Component {
	render() {
		console.log('in all tweets page!!!!');
		console.log(this.props);
		let displayTweets = this.props.allTweets.map((user) => {
			return (
				<div class="container bg-info text-black">
					<div class="row">
						<div class="col-sm">@{user.username}</div>
						<div class="col-sm">"{user.tweets}"</div>
					</div>
				</div>
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
						<h1>Welcome to Tweeder</h1>
						<hr />
						{displayTweets}
						<form method="POST" action="/tweets/new">
							<br />
							<br />
							<button type="submit" class="btn btn-danger">
								Compose new tweet!
							</button>
						</form>
					</div>
				</body>
			</html>
		);
	}
}

module.exports = Usertweets;
