var React = require('react');

class Form extends React.Component {
	render() {
		return (
			<div>
				{this.props.children}
				<form method="POST" action="/login">
					<div className="form-group row">
						<div className="col-sm-12">
							<input name="username" className="form-control" placeholder="Username" required/>
						</div>
					</div>
					<div className="form-group row">
						<div className="col-sm-12">
							<input type="password" name="password" className="form-control" placeholder="Password"
							       required/>
						</div>
					</div>
					<div className="buttons text-center">
						<button type="submit" className="btn btn-lg btn-primary">Login</button>
					</div>
				</form>
			</div>
		);
	}
}

module.exports = Form;