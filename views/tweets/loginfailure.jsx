var React = require('react');

class Loginfailure extends React.Component {
	render() {
		console.log('user data', this.props);
		console.log('in login failure form');
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
						<h1>BAD LOGIN</h1>
					</div>
				</body>
			</html>
		);
	}
}

module.exports = Loginfailure;
