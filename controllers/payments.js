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

	let paymentReceived = (request, response) => {
		console.log('payment is being sent!');
		// let recipientInfo = request.body.recipientusername;
		let moneySent = request.body.amount;
		let senderId = request.cookies.user_id;
		console.log('this is senderId', senderId);
		let recipientId = request.body.id;
		db.payments.sendingPayment(recipientId, senderId, moneySent, (err, result) => {
			if (err) {
				console.log('this is the error in models', err);
			} else {
				response.send('payments successful!!!');
			}
		});
	};

	/**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
	return {
		renderPaymentForm,
		paymentReceived
	};
};
