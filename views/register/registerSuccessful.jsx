const React = require('react');

class RegisterSuccessful extends React.Component {
	render () {
		console.log("RegisterSuccessful jsx");
		return (
			<html>
			<head></head>
			  <body>
			  	<h3>Your account has been created.<br/> Please proceed <a href="/login">here</a> to login</h3>
			  </body>
			</html>
		);

	}
}

module.exports = RegisterSuccessful;