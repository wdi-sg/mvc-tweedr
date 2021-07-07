module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let paymentControllerCallbacks = (request, response) => {
        // db.payments.getAll((error, allPayments) => {


        const allPayments = {
            sender_id: 2,
            recipient_id: 4,
            amount: 1600
        };

        response.render('payments/index', {
            allPayments
            // });
        })
    };

    let newPaymentControllerCallbacks = (request, response) => {
        let loggedIn = request.cookies.loggedIn;
        if (loggedIn) {
            response.render('payments/new');
        } else {
            response.render('users/login')
        }
    };

    let postPaymentControllerCallbacks = (request, response) => {
        let sender_id = request.cookies.loggedIn;
        let payment = request.body;

        let paymentInfo = [sender_id, payment.recipient_id, payment.amount];

        console.log("posting payment")
        // db.payments.registerNew(paymentInfo, (error, postPayment) => {
        // console.log(postPayment)
        console.log(paymentInfo)


        response.render('payments/index', {
            paymentInfo
            // });
        }) // })
    };

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        index: paymentControllerCallbacks,
        new: newPaymentControllerCallbacks,
        postPayment: postPaymentControllerCallbacks,
    };

}