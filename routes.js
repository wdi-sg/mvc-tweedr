module.exports = (app, db) => {


    //  all routes for controller

    const tweedr = require('./controllers/tweedr')(db);

    app.get('/', tweedr.home);
    app.get('/registerForm', tweedr.registerForm);
    app.post('/register', tweedr.register);

    app.get('/loginForm', tweedr.loginForm);
    app.post('/login', tweedr.login);

    app.get('/createTweed', tweedr.createTweed);
    //app.post('/createTweed')


};