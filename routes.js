module.exports = (app, db) => {


    //  all routes for controller

    const tweedr = require('./controllers/tweedr')(db);

    app.get('/', tweedr.home);

    //app.get('/registerForm', tweedr.registerForm);
    app.get('/register', tweedr.registerForm);
    app.post('/register', tweedr.register);

    //app.get('/loginForm', tweedr.loginForm);
    app.get('/login', tweedr.loginForm);
    app.post('/login', tweedr.login);
    app.get('/logout', tweedr.logout);

    app.get('/createTweed', tweedr.createTweed);
    app.post('/tweed', tweedr.tweed);

    app.get('/myTweeds', tweedr.myTweeds);
    app.delete('/myTweeds/:id/delete', tweedr.deleteMyTweeds);

    app.get('/myFollowing', tweedr.myFollowing);
    app.get('/myFollowers', tweedr.myFollowers);


};