var React = require('react');

class Newtweet extends React.Component {
	render() {
		console.log('in new tweet form PAGEGEEG!!!!');
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
						<h1>Tweeder</h1>
						<hr />
						<h2>Create a new tweet</h2>
						<br />
						<br />
						<form method="POST" action="/tweets/new/created">
							<input name="tweet" class="form-control form-control-lg" type="text" placeholder="Write your tweet here" />
							<br />
							<br />
							<button type="submit" class="btn btn-danger">
								Post Tweet
							</button>
						</form>
					</div>
				</body>
			</html>
		);
	}
}

module.exports = Newtweet;
