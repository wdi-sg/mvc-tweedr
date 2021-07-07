const sha256 = require('js-sha256');


module.exports = (db) => {

    let secret = 'secretpassword9090'
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

    let showIndex = (request, response) => {
        let cookie = request.cookies;
        if (cookie.loggedin) {
            response.redirect('/home')
        } else {
            response.render('index');
        }
    };

    let showLogin = (request, response) => {
        response.render('login');
    };

    let checkLogin = (request, response) => {
        let currentUser = request.body;

        db.tweedr.getUserUsingName(currentUser, (error, user) => {
            if (error) {
                console.log("error in getting file", error);
            } else {
                if (user === 'pass') {
                    response.send('wrong userpass')
                } else if (user) {
                    let hashedCookie = sha256(user.id + 'logged_id' + secret);
                    response.cookie('user_id', user.id);
                    response.cookie('loggedin', hashedCookie);
                    response.redirect('/home');
                } else {
                    response.send('wrong userid')
                }
            }
        });
    };

    let showCreateUser = (request, response) => {
      response.render('register');
    };

    let createUser = (request, response) => {

        let newUser = request.body;
        db.tweedr.createNewUser(newUser, (error, user) => {
            if (error) {
                console.log("error in getting file", error);

            } else if (user === 'taken'){
                response.send('username taken!')
            } else {
                let hashedCookie = sha256(user.id + 'logged_id' + secret);
                response.cookie('user_id', user.id);
                response.cookie('loggedin', hashedCookie);

                let dataSet = {
                    user : user
                }
                response.render('welcome', dataSet);
            }
        });
    };

    let showHome = (request, response) => {
        let userId = request.cookies.user_id;
        let storedCookie = request.cookies.loggedin;

        if (storedCookie === undefined) {
            response.send('please log in!')
        } else {
            db.tweedr.getUserUsingId(userId, (error, user) => {
                if (error) {
                    console.log("error in getting file", error);

                } else {
                    let currentCookieSesh = sha256(userId + 'logged_id' + secret)
                    if ( storedCookie === currentCookieSesh ) {
                        let dataSet = {
                            user : user
                        }
                        response.render('home', dataSet);
                    } else {
                        response.send('wrong user')
                    }
                }
            });
        }
    };

    let showCreateTweet = (request, response) => {

        let userId = request.cookies.user_id;
        let storedCookie = request.cookies.loggedin;

        if (storedCookie === undefined) {
            response.send('please log in!')
        } else {
            db.tweedr.getUserUsingId(userId, (error, user) => {
                if (error) {
                    console.log("error in getting file", error);

                } else {
                    let currentCookieSesh = sha256(userId + 'logged_id' + secret)
                    if ( storedCookie === currentCookieSesh ) {
                        let dataSet = {
                            user : user
                        }
                        response.render('newtweet', dataSet);
                    } else {
                        response.send('wrong user')
                    }
                }
            });
        }
    };

    let createTweet = (request, response) => {

        let cookie = request.cookies;
        let newTweet = request.body;

        db.tweedr.createNewTweet(newTweet, (error, user) => {
            if (error) {
                console.log("error in getting file", error);

            } else {
                let currentCookieSesh = sha256(cookie.user_id + 'logged_id' + secret)
                if ( cookie.loggedin === currentCookieSesh ) {
                    response.redirect('/home');
                } else {
                    response.send('wrong user')
                }
            }
        });
    };

    let showAllTweets = (request, response) => {

        let userId = request.cookies.user_id;
        let storedCookie = request.cookies.loggedin;

        if (storedCookie === undefined) {
            response.send('please log in!')
        } else {
            db.tweedr.getAllTweets((error, allTweets) => {
                if (error) {
                    console.log("error in getting file", error);
                } else {

                    db.tweedr.getUserUsingId( userId, (error, user) => {
                        if (error) {
                            console.log("error in getting file", error);

                        } else {
                            let currentCookieSesh = sha256(userId + 'logged_id' + secret)
                            if ( storedCookie === currentCookieSesh ) {
                                let dataSet = {
                                    tweets : allTweets,
                                    user : user
                                }
                                response.render('trending', dataSet);
                            } else {
                                response.send('wrong user')
                            }
                        }
                    });
                }
            });
        }
    };

    let showIndvUser = (request, response) => {
        let otherUser = request.params.id;

        let userId = request.cookies.user_id;
        let storedCookie = request.cookies.loggedin;

        // db.tweedr.getUserUsingId( otherUser, (error, user) => {
        //     if (error) {
        //         console.log("error in getting 1st file", error);
        //     } else {
        //     }
        // });

        if (storedCookie === undefined) {
            response.send('please log in!')

        } else if (userId === otherUser) {
            response.redirect('/profile');

        } else {
            db.tweedr.getUserUsingId( userId, (error, user) => {
                if (error) {
                    console.log("error in getting 1st file", error);
                } else {

                    db.tweedr.getUserUsingId( otherUser, (error, otherUser) => {
                        if (error) {
                            console.log("error in getting 2nd file", error);

                        } else {
                            let currentCookieSesh = sha256(userId + 'logged_id' + secret)
                            if ( storedCookie === currentCookieSesh ) {
                                let dataSet = {
                                    user : user,
                                    otherUser : otherUser
                                }
                                response.render('otherUser', dataSet);
                            } else {
                                response.send('wrong user')
                            }
                        }
                    });
                }
            });
        }
    };

    let followIndvUser = (request, response) => {

        let newFollower = request.body;
        let cookie = request.cookies;
        let newTweet = request.body;

        db.tweedr.createNewFollower(newFollower, (error, user) => {
            if (error) {
                console.log("error in getting file", error);

            } else {
                let currentCookieSesh = sha256(cookie.user_id + 'logged_id' + secret)
                if ( cookie.loggedin === currentCookieSesh ) {
                    response.redirect(`/users/${user.user_id}`);
                } else {
                    response.send('wrong user')
                }
            }
        });
    };

    let showUserProfile = (request, response) => {

        let userId = request.cookies.user_id;
        let storedCookie = request.cookies.loggedin;

        if (storedCookie === undefined) {
            response.send('please log in!')
        } else {
            db.tweedr.getUserUsingId(userId, (error, user) => {
                if (error) {
                    console.log("error in getting file", error);

                } else {
                    let currentCookieSesh = sha256(userId + 'logged_id' + secret)
                    if ( storedCookie === currentCookieSesh ) {
                        let dataSet = {
                            user : user
                        }
                        response.render('user', dataSet);
                    } else {
                        response.send('wrong user')
                    }
                }
            });
        }
    };

    let logout = (request, response) => {
      response.clearCookie('user_id');
      response.clearCookie('loggedin');
      response.redirect('/index');
    };

    let redirect = (request, response) => {
      response.redirect('/index');
    };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    showIndex,
    showLogin,
    checkLogin,
    showCreateUser,
    createUser,
    showHome,
    showCreateTweet,
    createTweet,
    showAllTweets,
    showIndvUser,
    followIndvUser,
    showUserProfile,
    logout,
    redirect,
    // showHome2,
  };

}