const React = require('react');

class Unauthorised extends React.Component {
	render () {

		return (
			<html>
			<head></head>
			  <body>
			  <h3>You must be logged in to view this page.</h3>
			  <h3>Please <a href="/login">log in</a> and try again.</h3>
			  </body>
			</html>
		);

	}
}

module.exports = Unauthorised;