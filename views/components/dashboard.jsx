var React = require('react');

class Dashboard extends React.Component {
	render() {
		return (
			<div className="card">
				<div className="card-body">
					<form method="POST" action="/logout">
						<div className="buttons text-center">
							<h3>{this.props.username}</h3>
							<button type="submit" className="btn btn-lg btn-primary">Log out</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

module.exports = Dashboard;