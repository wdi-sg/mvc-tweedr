var React = require('react');

class Loginform extends React.Component {
	render() {
		console.log('in login page!!');
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
						<h3>Login Below:</h3>
						<br />
						<form method="POST" action="/login">
							<p> Username:</p>
							<input name="username" />
							<br />
							<br />
							<p> Password:</p>
							<input name="password" />
							<hr />
							<input type="submit" />
						</form>
					</div>
				</body>
			</html>
		);
	}
}

module.exports = Loginform;
