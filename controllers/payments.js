module.exports = (db) => {
  // Controller logic

  // future use to take in payment transactions 
  const paymentsControllerCallbacks = (request, response) => {
  };

  // display payments sent by the user
  const paymentsSent = (request, response) => {
    const user_id = request.cookies["user_id"];
    const {message} = request.body;
    const data = {message, user_id};
    // db.payments.postTweet(data, (error, result) => {
      //simulate data back
      const payments = [
          {
            transaction_id: "12340",
            sender_id : 1,
            sender_username: "david",
            recipient_id : 2,
            recipient_username: "terence",
            amount : 400,
            payment_date: "October 1, 2019 2:00pm"
          },
          {
            transaction_id: "12341",
            sender_id : 1,
            sender_username: "david",
            recipient_id : 3,
            recipient_username: "wilson",
            amount : 200,
            payment_date: "October 1, 2019 3:00pm"
          },

        ];
      data.payments = payments;
      response.render("payments/paymentssent", data );
    // });
  };

  // display payments received by the user
  const paymentsReceived = (request, response) => {
    const user_id = request.cookies["user_id"];
    const {message} = request.body;
    const data = {message, user_id};
    // db.payments.postTweet(data, (error, result) => {
    //simulate data back
      const payments = [
          {
            transaction_id: "12343",
            sender_id : 1,
            sender_username: "terence",
            recipient_id : 2,
            recipient_username: "david",
            amount : 600,
            payment_date: "October 1, 2019 8:00pm"
          },
          {
            transaction_id: "12345",
            sender_id : 3,
            sender_username: "wilson",
            recipient_id : 1,
            recipient_username: "david",
            amount : 800,
            payment_date: "October 1, 2019 10:00pm"
          },

        ];
        data.payments = payments;

      response.render("payments/paymentsreceived", data);
    // });
  };

  // Export controller functions as a module
  return {
    payments: paymentsControllerCallbacks,
    paymentsSent,
    paymentsReceived,
  };
};
