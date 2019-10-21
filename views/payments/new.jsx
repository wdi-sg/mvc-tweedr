var React = require('react');
var Layout = require('../defaultlayout');

class NewPayment extends React.Component {
	render() {
			console.log('awesome echidna');
				return (
					<Layout>
						<div className='text-center col-12 d-flex flex-wrap justify-content-center'>
							<h2 class='m-3 col-12'>New Payment</h2>
							<form class='m-3' method='POST' action='/payments'>
								Recipient ID: <input type='integer' name='recipient_id' required />
								<br />
								Amount: <input type='integer' name='amount' required />
								<br />
								<input type='submit' value='Submit' className='m-2' />
							</form>
						</div>
					</Layout>
				);
	}
}

module.exports = NewPayment;
