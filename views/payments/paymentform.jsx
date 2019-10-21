const React = require('react');

class Paymentform extends React.Component {
	render() {
		return (
			<html>
				<body>
					<h1>Send money to a fellow user!</h1>
					<form action="/payments/sent" method="POST">
						<p>Your Username</p>
						<input type="text" name="username" />
						<br />
						<br />
						<p>Username of recipient</p>
						<input type="text" name="password" />
						<br />
						<br />
						<p>amount</p>
						<input type="text" name="name" />
						<br />
						<br />
						<p>Email</p>
						<input type="text" name="email" />
						<br />
						<br />
						<input type="submit" value="create account" />
					</form>
				</body>
			</html>
		);
	}
}

module.exports = Paymentform;
