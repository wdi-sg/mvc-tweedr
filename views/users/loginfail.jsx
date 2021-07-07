var React = require('react');
var Layout = require('../defaultlayout');

class Login extends React.Component {
	render() {
			console.log("wowowowowo")
			console.log('not logged in');
				return (
					<Layout>
						<div className='text-center col-12 d-flex flex-wrap justify-content-center'>
							<h2 class='m-3 col-12 text-danger'>Login FAILED. Try again</h2>
							<form class='m-3' method='POST' action='/login'>
								Username: <input type='text' name='username' required />
								<br />
								Password: <input type='password' name='password' required />
								<br />
								<input type='submit' value='Submit' className='m-2' />
							</form>
						</div>
					</Layout>
				);
	}
	}


module.exports = Login;
