var React = require('react');
var Login = require('../components/login-form');
var Register = require('../components/register-form');

class Form extends React.Component {
	render() {
		let error = "";
		let forms = (
			<div className="card-body">
				<ul className="nav nav-tabs nav-fill" id="login-register" role="tablist">
					<li className="nav-item">
						<a className="nav-link active" id="home-tab" data-toggle="tab" href="#login"
						   role="tab" aria-controls="home" aria-selected="true">Login</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" id="profile-tab" data-toggle="tab" href="#register"
						   role="tab" aria-controls="profile" aria-selected="false">Register</a>
					</li>
				</ul>
				<div className="tab-content" id="login-register-content">
					<div className="tab-pane fade show active" id="login" role="tabpanel"
					     aria-labelledby="home-tab">
						<Login/>
					</div>
					<div className="tab-pane fade" id="register" role="tabpanel"
					     aria-labelledby="profile-tab">
						<Register/>
					</div>
				</div>
			</div>
		);
		if (this.props.error === "login") {
			error = (
				<div className="alert alert-danger" role="alert">
					Invalid username/password.
				</div>);
			forms = (
				<div className="card-body">
					<ul className="nav nav-tabs nav-fill" id="login-register" role="tablist">
						<li className="nav-item">
							<a className="nav-link active" id="home-tab" data-toggle="tab" href="#login"
							   role="tab" aria-controls="home" aria-selected="true">Login</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" id="profile-tab" data-toggle="tab" href="#register"
							   role="tab" aria-controls="profile" aria-selected="false">Register</a>
						</li>
					</ul>
					<div className="tab-content" id="login-register-content">
						<div className="tab-pane fade show active" id="login" role="tabpanel"
						     aria-labelledby="home-tab">
							<Login>{error}</Login>
						</div>
						<div className="tab-pane fade" id="register" role="tabpanel"
						     aria-labelledby="profile-tab">
							<Register/>
						</div>
					</div>
				</div>
			);
		}
		else if (this.props.error === "register") {
			error = (
				<div className="alert alert-danger" role="alert">
					The username is in use.
				</div>);
			forms = (
				<div className="card-body">
					<ul className="nav nav-tabs nav-fill" id="login-register" role="tablist">
						<li className="nav-item">
							<a className="nav-link" id="home-tab" data-toggle="tab" href="#login"
							   role="tab" aria-controls="home" aria-selected="false">Login</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" id="profile-tab" data-toggle="tab" href="#register"
							   role="tab" aria-controls="profile" aria-selected="true">Register</a>
						</li>
					</ul>
					<div className="tab-content" id="login-register-content">
						<div className="tab-pane fade" id="login" role="tabpanel"
						     aria-labelledby="home-tab">
							<Login/>
						</div>
						<div className="tab-pane fade show active" id="register" role="tabpanel"
						     aria-labelledby="profile-tab">
							<Register>{error}</Register>
						</div>
					</div>
				</div>
			)
		}
		else if (this.props.error === "server"){
			error = (
				<div className="alert alert-danger" role="alert">
					Please try again later as the server is having issues.
				</div>);
			forms = (
				<div className="card-body">
					<ul className="nav nav-tabs nav-fill" id="login-register" role="tablist">
						<li className="nav-item">
							<a className="nav-link" id="home-tab" data-toggle="tab" href="#login"
							   role="tab" aria-controls="home" aria-selected="false">Login</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" id="profile-tab" data-toggle="tab" href="#register"
							   role="tab" aria-controls="profile" aria-selected="true">Register</a>
						</li>
					</ul>
					<div className="tab-content" id="login-register-content">
						<div className="tab-pane fade" id="login" role="tabpanel"
						     aria-labelledby="home-tab">
							<Login/>
						</div>
						<div className="tab-pane fade show active" id="register" role="tabpanel"
						     aria-labelledby="profile-tab">
							<Register>{error}</Register>
						</div>
					</div>
				</div>
			)
		}
		return (
			<div className="card">
				{forms}
			</div>
		);
	}
}

module.exports = Form;