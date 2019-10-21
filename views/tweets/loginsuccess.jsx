var React = require('react');

class Loginsuccess extends React.Component {
	render() {
		console.log('in login sucess!!');
		let displayLoginData = this.props.loggedInUser.map((user) => {
			return (
				<span>
					Username: {user.username}, Password: {user.password}
				</span>
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
						<h1>Successful login into Tweeder!!!</h1>
						<hr />
						<h3>Your login details:</h3>
						<br />
						{displayLoginData}
					</div>
				</body>
			</html>
		);
	}
}

module.exports = Loginsuccess;
