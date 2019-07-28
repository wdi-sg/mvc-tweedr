const hashFunc = require('js-sha256');
// const cookieParser = require('cookie-parser');
// const express = require('express');
// const app = express();
// app.use(cookieParser());

module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let authenticateLogin = (request, response) => {
        let hashedPW = hashFunc(request.body.password);
        let data = [request.body.screen_name, hashFunc(request.body.password)];
        db.queryMod.checkLogin( data, (error, results) => {
            console.log(results);
            if (results === null) {
                response.status(403).send("<h1>USER NOT FOUND</h1>");
            } else {
                if (results[0].password === hashedPW) {

                    giveCookie(results[0].id, request.body.screen_name, response);
                    let currentUser = results[0].id;
                    console.log(currentUser);
                    console.log(results[0].screen_name);
                    db.queryMod.getAll((error, allResults) => {
                        console.log( allResults );
                        response.render( 'main/index', {allResults} );
                    });
                } else {
                    response.status(403).send("<h1>WRONG PASSWORD</h1>");
                }
            }
        });
    }

    let renderLoginForm = (request, response) => {
        response.render('main/login');
    };

    let loadHomePage = (request, response) => {
        if (checkSession(request)) {
            db.queryMod.getAll((error, allResults) => {
                console.log( allResults );
                console.log("im the culprit");
                let currentUserId = request.cookies['user_id'];
                response.render('main/index', {"allResults": allResults, "currentUserId": currentUserId});
            });
        } else {
            response.redirect('/login');
        }
    };

    let renderNewTweetForm = (request, response) => {
        if (checkSession(request)) {
            let userId = request.cookies['user_id'];

            response.render('main/newtweet');
        } else {
            response.redirect('/login');
        }
    };

    let renderRegisterForm = (request, response) => {
        destroyCookie(response);
        response.render('main/register');
    };

    let processNewTweet = (request, response) => {
        console.log("calling new tweet");
        if (checkSession(request)) {
            console.log("process new tweet");
            let validUser = request.cookies['user_id'];
            let data = [validUser, request.body.tweetmsg];
            db.queryMod.newTweet( data, (error, results) => {
                db.queryMod.getAll((error, allResults) => {
                    //console.log( allResults );
                    response.render('main/index', {allResults});
                });
                // response.render('main/index');
            });
        }
        console.log("end....");
    };

    let processRegistration = (request, response) => {
        let data = [request.body.screen_name, hashFunc(request.body.password), request.body.avatar];
        db.queryMod.addUser( data, (error, results) => {
            if (results === null) {
                response.status(403).send("<h1>DUPLICATE SCREEN NAME. CHOOSE ANOTHER</h1>");
            } else {
            console.log("registration callbacks");
            console.log( results );
            giveCookie(results[0].id, request.body.screen_name, response);

            db.queryMod.getAll((error, allResults) => {
                console.log( allResults );
                response.render('main/index', {allResults});
            });
            }
            // response.render('main/index');
        });
    };

    let giveCookie = function(userId, screen_name, response) {
        let currentSessionCookie = hashFunc( userId + 'logged_id' );
        response.cookie('tweedr', currentSessionCookie);
        response.cookie('user_id', userId);
        response.cookie('screen_name', screen_name);
    }

    let destroyCookie = function(response) {
         response.cookie('tweedr', "");
         response.cookie('user_id', "");
    }

    let logoutUser = (request, response) => {
        destroyCookie(response);
        response.redirect('/');
    };

    let checkSession = function(request, response) {
        let validSession = request.cookies['tweedr'];
        let validUser = request.cookies['user_id'];
        if (validSession && validUser) {
            if (hashFunc( validUser + 'logged_id' ) === validSession) {
                console.log("userID & PW cookie seems valid");
                return true;
            }
        }
        console.log("authentification error");
        return false;
    };

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        loginUser: authenticateLogin,
        loginForm: renderLoginForm,
        home: loadHomePage,
        newForm: renderNewTweetForm,
        loadNewTweet: processNewTweet,
        registerForm: renderRegisterForm,
        registerUser: processRegistration,
        logout: logoutUser
    };

}
