var React = require('react');

class Dashboard extends React.Component {
	render() {
		let userLink = "../users/"+this.props.username;
		let error = "";
		if (this.props.error === "login") {
			error = (
				<div className="alert alert-danger" role="alert">
					Please try again later as the server is having issues.
				</div>);
		}
		return (
			<div className="card">
				{error}
				<div className="card-body">
					<h3 className="dashboard-title">Hi <a href={userLink}>{this.props.username}</a>!</h3>
					<form className="dashboard-new row" method="POST" action="/new">
						<div className="col-9">
							<input type="text" className="form-control" name="content" placeholder="Tweedr your thoughts!"/>
						</div>
						<div className="col-3 text-right">
							<button type="submit" className="btn btn-primary">Submit</button>
						</div>
					</form>
					<div className="dashboard-info">
						See following
					</div>
					<form className="dashboard-logout" method="POST" action="/logout">
						<div className="buttons">
							<button type="submit" className="btn btn-danger">Log out</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

module.exports = Dashboard;