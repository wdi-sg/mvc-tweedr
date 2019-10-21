const sha256 = require("js-sha256");
const SALT = "bananas are delicious";

module.exports = db => {
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let sendPayment = (request, response) => {
    let user_id = request.cookies.user_id;
    let user_name = request.cookies.user_name;
    let { content } = request.body;

    db.payments.sendPayment(user_id, content, (error, paymentSent) => {
      if (error) {
        console.log("Error!", error);
      } else {
        const data = {
          paymentSent: paymentSent,
          message: "Payment sent!",
          sentPayment: true,
          user_name: user_name
        };

        response.send("going to send payment!!!!");
        // response.render("payments/send", data);
      }
      // response.render('tweets/addNewSuccess', { newTweet });
    });
  };

  let renderSendPaymentForm = (request, response) => {
    let logged_in = request.cookies.logged_in;
    let user_id = request.cookies.user_id;
    console.log("request.cookies!!!!!!!!\n", request.cookies);
    console.log(
      "request.cookies.logged_in!!!!!!!!\n",
      request.cookies.logged_in
    );

    if (!logged_in) {
      response.render("users/login", {
        msg: "Please log in before sending payment!"
      });
    } else {
      let verificationSessionCookie = sha256(user_id + "logged" + SALT);
      let currentSessionCookie = request.cookies.logged_in;

      if (verificationSessionCookie === currentSessionCookie) {
        // response.send("form for sending payment!!!!");
        response.render("payments/send");
      } else {
        console.log("hacker!!!!!!");
        response.render("users/login", { msg: "Please log in again!" });
      }
    }
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    renderSendPaymentForm,
    sendPayment
  };
};
