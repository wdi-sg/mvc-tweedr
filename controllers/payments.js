const sha256 = require('js-sha256');
const salt = 'tweedrsalt';

module.exports = (db) => {
	/**
   * ===========================================
   * Controller logic
   * ===========================================
   */

	let renderPaymentForm = (request, response) => {
		console.log('generating payment form!');
		response.render('payments/paymentform');
	};

	/**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
	return {
		renderPaymentForm
	};
};
