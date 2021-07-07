var React = require("react");
var DefaultLayout = require("../layouts/default");
var Tweet = require("../components/tweet");
var Form = require("../components/form");

class Home extends React.Component {
	render() {
		let tweets = this.props.allTweets.map((tweet) => {
			return (<Tweet tweet={tweet}/>)
		});
		return (
			<DefaultLayout>
				<div className="row">
					<div className="col-6 offset-1">
						{tweets}
					</div>
					<div className="col-4">
						<div className="side-bar">
							<Form error={this.props.error}/>
						</div>
					</div>
				</div>
			</DefaultLayout>
		);
	}
}

module.exports = Home;
