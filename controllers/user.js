const helper = require('../helper');
const sha256 = require('js-sha256');

module.exports = function(db) {

    let loginRequestHandler = async function(request, response) {
        try {
            if (helper.checkForLogin(request.cookies) === false) {
                response.render('user/login');
            } else {
                response.redirect('/');
            }
        } catch(e) {
            console.log('user controller ' + e);
        }
    };

    let authenticateRequestHandler = async function(request, response) {
        try {
            let result = await db.users.authenticate(request.body.username, request.body.password);

            if (result.length === 1) {
                response.cookie('username', request.body.username);
                response.cookie('loggedIn', sha256(request.body.username));

                response.redirect('/');

            } else {
                response.send('Login Failure');
            }
        } catch(e) {
            console.log('user controller ' + e);
        }
    };

    let registerRequestHandler = async function(request, response) {
        try {
            response.render('user/register');
        } catch(e) {
            console.log('user controller ' + e);
        }
    };

    let createAccountRequestHandler = async function(request, response) {
        try {
            let result = await db.users.createAccount(request.body.username, request.body.password);

            if (result.length === 1) {
                response.redirect('user/login');
            } else {
                response.send('Username already exist!');
            }
        } catch(e) {
            console.log('user controller ' + e);
        }
    };

    return {
        loginRequestHandler,
        authenticateRequestHandler,
        registerRequestHandler,
        createAccountRequestHandler
    };
}