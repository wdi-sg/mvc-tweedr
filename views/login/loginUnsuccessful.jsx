const React = require('react');

class LoginUnsuccessful extends React.Component {
	render () {

		let username = this.props.username;
		let password = this.props.password;

		return (
			<html>
			<head></head>
			  <body>
			  <h1>Welcome back!</h1>
			  <h3>Sign in to your Tweedr account</h3>
			    <h4>
			    <form method="post" action="/login" >
			      <p>Username: <input type="text" name="username" value={username} />
			      </p>
			      <p>Password: <input type="password" name="password" value={password} />
			      </p>
			      <p>Your username or password is incorrect.</p>
			      <p>Please try again.</p>
			      <input type="submit" value="Submit" />
			    </form>
			    </h4>
			  </body>
			</html>
		);

	}
}

module.exports = LoginUnsuccessful;