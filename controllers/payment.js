module.exports = (db) => {

    /**
    * ===========================================
    * Controller logic
    * ===========================================
    */

    const getNewPaymentForm = (request, response) => {
        response.render('newPaymentForm');
    };

    /**
    * ===========================================
    * Export controller functions as a module
    * ===========================================
    */
    return {
        getPaymentForm: getNewPaymentForm
    };
};