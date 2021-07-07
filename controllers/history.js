const sha256 = require("js-sha256");
const SALT = "bananas are delicious";

module.exports = db => {
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let historyPaymentSent = (request, response) => {
    // db.history.getAllPaymentsSent((error, allPaymentsSent) => {

    const allPaymentsSent = [
      {
        sender_id: 1,
        recipient_id: 2,
        amount: 399
      },
      {
        sender_id: 1,
        recipient_id: 3,
        amount: 499
      }
    ];

    const data = {
      allPaymentsSent
    };

    response.render("history/sent", data);
    // });
  };

  let historyPaymentReceived = (request, response) => {
    // db.history.getAllPaymentsReceived((error, allPaymentsReceived) => {

    const allPaymentsReceived = [
      {
        sender_id: 4,
        recipient_id: 1,
        amount: 334
      },
      {
        sender_id: 5,
        recipient_id: 1,
        amount: 234
      }
    ];

    const data = {
        allPaymentsReceived
    };

    response.render("history/received", data);
    // });
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    historyPaymentSent,
    historyPaymentReceived
  };
};
