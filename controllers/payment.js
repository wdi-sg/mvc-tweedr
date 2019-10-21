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

    /** GET Method to get sender's payment
     * ==========================================================================
     * Call model method to get the payment info by sender_id HERE
     *   1. Check method 'getUserSentPayments' is created, with SELECT query in model
     *   2. Check 'payments' key is exported from db.js
     *.  3. Remember to parseInt sender_id in the method in model file
     * ==========================================================================
     */
    const getSenderPayment = (request, response) => {

        let sender_id = parseInt(request.params.sender_id); // This value should be retrieved from current logged in user's user ID cookie.
        const inputValues = [sender_id];
        console.log("From Controller: " + inputValues);

        db.payments.getUserSentPayments(inputValues, (error, payments) => {

            if (error) {

                console.log("This is from payment controller. There is error getting the payment record by sender ID!");

            } else {

                if (payments.length > 0) {

                    response.send(payments);

                } else {

                    response.send("You have not made any payment.");

                }
            }
        });
    };

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        getPaymentForm: getNewPaymentForm,
        postPayment: createPaymentDetails,
        getPaymentBySender: getSenderPayment
    };
};