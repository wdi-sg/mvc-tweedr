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

    let loadIndex = (request, response) => {
        if (checkSession(request)) {
            db.queryMod.getAll((error, allResults) => {
                let currentUserId = request.cookies['user_id'];
                response.render('main/index', {
                    "allResults": allResults,
                    "currentUserId": currentUserId
                });
            });
        } else {
            response.redirect('/login');
        }
    };

    let loadLogin = (request, response) => {
        response.render('main/login');
    };

    let logoutUser = (request, response) => {
        destroyCookie(response);
        response.redirect('/');
    };

    let authenticateLogin = (request, response) => {
        let hashedPW = hashFunc(request.body.password);
        let data = [request.body.screen_name, hashFunc(request.body.password)];
        db.queryMod.getUserLogin(data, (error, results) => {
            if (results === null) {
                response.status(403).send("<h1>USER NOT FOUND</h1>");
            } else {
                if (results[0].password === hashedPW) {
                    giveCookie(results[0].id, request.body.screen_name, response);
                    let currentUser = results[0].id;
                    db.queryMod.getAll((error, allResults) => {
                        response.render('main/index', {
                            allResults
                        });
                    });
                } else {
                    response.status(403).send("<h1>WRONG PASSWORD</h1>");
                }
            }
        });
    }

    let loadRegistrationPage = (request, response) => {
        destroyCookie(response);
        response.render('main/register');
    };

    let loadProfilePage = (request, response) => {
        if (checkSession(request)) {
            let currentUserId = request.cookies['user_id'];
            db.queryMod.getUser(currentUserId, (error, results) => {
                console.log(results);
                response.render('main/profile', {    
                    "results": results,
                    "currentUserId": currentUserId
                });
            });
        } else {
            response.redirect('/login');
        }
    };

    let addNewTweet = (request, response) => {
        if (checkSession(request)) {
            let validUser = request.cookies['user_id'];
            let data = [validUser, request.body.tweetmsg];
            db.queryMod.newTweet(data, (error, results) => {
                db.queryMod.getAll((error, allResults) => {
                    response.render('main/index', {allResults});
                });
            });
        }
    };

    let checkFollowsCount = (request, response) => {
        if (checkSession(request)) {
            let currentUserId = request.cookies['user_id'];
            db.queryMod.getFollowCount(currentUserId, (error, results) => {
                response.render('main/follows', {
                    "results": results,
                    "currentUserId": currentUserId
                });

            });
        } else {
            response.redirect('/login');
        }
    };

    let loadRelatedTwts = (request, response) => {
        if (checkSession(request)) {
            let currentUserId = request.cookies['user_id'];
            db.queryMod.getMyTweets(currentUserId, (error, allResults) => {
                let currentUserId = request.cookies['user_id'];
                response.render('main/index', {
                    "allResults": allResults,
                    "currentUserId": currentUserId
                });
            });
        } else {
            response.redirect('/login');
        }
    };


    let listFollowings = (request, response) => {
        if (checkSession(request)) {
            let currentUserId = request.cookies['user_id'];
            db.queryMod.loadFollowings(currentUserId, (error, results) => {
                response.render('main/followings', {
                    "results": results,
                    "currentUserId": currentUserId
                });
            });
        } else {
            response.redirect('/login');
        }
    };

    // let getFollowers = (request, response) => {
    //     if (checkSession(request)) {
    //         let currentUserId = request.cookies['user_id'];
    //         db.queryMod.getFollowCount(currentUserId, (error, results) => {
    //             response.render('main/follows', {
    //                 "results": results,
    //                 "currentUserId": currentUserId
    //             });
    //         });
    //     } else {
    //         response.redirect('/login');
    //     }
    // };



    let addNewFollow = (request, response) => {
        if (checkSession(request)) {
            let currentUserId = request.cookies['user_id'];
            let targetUser = request.body.screen_name;
            db.queryMod.addFollow([currentUserId, targetUser], (error, results) => {
                response.redirect('follows');
            });
        } else {
            response.redirect('/login');
        }
    };

    let registerNewUser = (request, response) => {
        let data = [request.body.screen_name, hashFunc(request.body.password), request.body.avatar];
        db.queryMod.addUser(data, (error, results) => {
            if (results === null) {
                response.status(403).send("<h1>DUPLICATE SCREEN NAME. CHOOSE ANOTHER</h1>");
            } else {
                giveCookie(results[0].id, request.body.screen_name, response);
                db.queryMod.getAll((error, allResults) => {
                    console.log(allResults);
                    response.render('main/index', {
                        allResults
                    });
                });
            }
        });
    };

    let giveCookie = function(userId, screen_name, response) {
        let currentSessionCookie = hashFunc(userId + 'logged_id');
        response.cookie('tweedr', currentSessionCookie);
        response.cookie('user_id', userId);
        response.cookie('screen_name', screen_name);
    }

    let destroyCookie = function(response) {
        response.cookie('tweedr', "");
        response.cookie('user_id', "");
    }

    let checkSession = function(request, response) {
        let validSession = request.cookies['tweedr'];
        let validUser = request.cookies['user_id'];
        if (validSession && validUser) {
            if (hashFunc(validUser + 'logged_id') === validSession) {
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
        index           : loadIndex,
        login           : loadLogin,
        logout          : logoutUser,
        loginPost       : authenticateLogin,
        register        : loadRegistrationPage,
        registerPost    : registerNewUser,
        profile         : loadProfilePage,
        newTweet        : addNewTweet,
        follows         : checkFollowsCount,
        newFollow       : addNewFollow,
        listFollowing   : listFollowings,
        getRelatedTwts  : loadRelatedTwts,
        // followers: getFollowers,
        // newForm         : renderNewTweetForm,


    };

}
