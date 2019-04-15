const React = require('react');

class Login extends React.Component {
	render () {

		return (
			<html>
			<head></head>
			  <body>
			  <h1>Welcome back!</h1>
			  <h3>Sign in to your Tweedr account</h3>
			    <h4>
			    <form style={{margin: '5px 0'}} method="post" action="/login" >
			      <p>Username: <input type="text" name="username" />
			      </p>
			      <p>Password: <input type="password" name="password" />
			      </p>
			      <input type="submit" value="Submit" />
			    </form>
			    <form method="get" action="/" >
			      <input type="submit" value="Cancel" />
			    </form>
			    </h4>
			  </body>
			</html>
		);

	}
}

module.exports = Login;