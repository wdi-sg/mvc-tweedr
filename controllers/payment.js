module.exports = (db) => {

    /**
    * ===========================================
    * Controller logic
    * ===========================================
    */

    // Method to render new payment form
    const getNewPaymentForm = (request, response) => {
        response.render('newPaymentForm');
    };

    // Method to save payment details
    const createPaymentDetails = (request, response) => {

        // Read payment data
        const paymentData = {
            senderID: 8, // Login doesn't work, so use hardcoded data first. Will need to get current logged in userID from cookie
            recipientID: request.body.recipientID,
            amount: request.body.amount
        };

        /**
        * ==========================================================================
        * Call model method to save the payment info HERE
        *   1. Check method 'createPayment' is created, with INSERT query in model
        *   2. Check 'payments' key is exported from db.js
        * ==========================================================================
        */

        // db.payments.createPayment(paymentData, (error, payments) => {

            // if (error) {

                // console.log("This is from payment controller. There is error inserting the payment record!");

            // } else {

                response.send(paymentData);

            // }
        // });
    };



    /**
    * ===========================================
    * Export controller functions as a module
    * ===========================================
    */
    return {
        getPaymentForm: getNewPaymentForm,
        postPayment: createPaymentDetails
    };
};