var React = require('react');

class RegisterSuccess extends React.Component {
	render() {
		console.log('user data', this.props);
		console.log('user data imported into users database');
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
					<div class="container text-center text-white borderless">
						<h1>You're all setup</h1>
						<h2>Your details at a glance</h2>
						<ul>
							{this.props.registeredUser.map((user) => (
								<React.Fragment>
									<li>email: {user.email}</li>
									<li>user: {user.username}</li>
									<li>password: {user.password}</li>
								</React.Fragment>
							))}
						</ul>
					</div>
				</body>
			</html>
		);
	}
}

module.exports = RegisterSuccess;
