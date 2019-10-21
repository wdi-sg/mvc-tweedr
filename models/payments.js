const sha256 = require('js-sha256');
const salt = 'tweedrsalt';

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
	// `dbPoolInstance` is accessible within this function scope

	let sendingPayment = (recipientId, senderId, moneySent, callback) => {
		// finding recipient id
		let paymentInsert = [ senderId, recipientId, moneySent ];
		let revisedRecipientInfo = `INSERT INTO payment (sender_id, recipient_id, amount) VALUES ($1, $2, $3)`;

		dbPoolInstance.query(revisedRecipientInfo, paymentInsert, (error, queryResult) => {
			if (error) {
				// invoke callback function with results after query has executed
				console.log('shit has hit the fan', error);
			} else {
				console.log;
				callback(null, null);
			}
		});
	};

	return {
		sendingPayment
	};
};
