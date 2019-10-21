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

        // Set sample data
        const samplePaymentData = {
            senderID: 8, // Login doesn't work, so use hardcoded data first. Will need to get current logged in userID from cookie
            recipientID: request.body.recipientID,
            amount: request.body.amount
        };

        // Call model method to save the payment info HERE
        response.send(samplePaymentData);

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