module.exports = (app, allModels) => {
	/*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

	// require the controller
	const tweedrControllerCallbacks = require('./controllers/tweedr')(allModels);
	const userControllerCallbacks = require('./controllers/user')(allModels);
	const paymentsControllerCallback = require('./controllers/payments')(allModels);

	// cool routes!

	app.get('/register', userControllerCallbacks.userNew);

	app.post('/register', userControllerCallbacks.userCreate);

	app.get('/login', userControllerCallbacks.userLogin);

	app.post('/login', userControllerCallbacks.userLoggedIn);

	app.get('/users/:id', userControllerCallbacks.userProfile);

	app.post('/users', userControllerCallbacks.userFollow);

	app.get('/tweedr', tweedrControllerCallbacks.index);

	app.get('/tweedr/new', tweedrControllerCallbacks.tweedNew);

	app.post('/tweedr', tweedrControllerCallbacks.tweedCreate);

	app.get('/tweedr/:id', tweedrControllerCallbacks.tweedShow);

	app.get('/tweedr/:id/edit', tweedrControllerCallbacks.tweedEdit);

	app.put('/tweedr/:id', tweedrControllerCallbacks.tweedUpdate);

	app.delete('/tweedr/:id', tweedrControllerCallbacks.tweedDelete);

	// @@@@@@@@@@@@@@@@@@@@@ payment part @@@@@@@@@@@@@@@@@@@@@@@@@

	// creates form to send payment
	app.get('/payments/form', paymentsControllerCallback.renderPaymentForm);
	app.post('/payments', paymentsControllerCallback.paymentReceived);
};
