var React = require('react');

class Home extends React.Component {
	render() {
		console.log(this.props.allTweets);
		console.log('hello views');
		let finalBoss = this.props.allTweets.map((x) => {
			return (
				<span>
					<p>{x.tweets}</p>
				</span>
			);
		});
		return (
			<html>
				<head />
				<body>
					<h3>hello</h3>
					<p>{finalBoss}</p>
				</body>
			</html>
		);
	}
}

module.exports = Home;
