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

        db.tweedr.checkUserName(currentUser, (error, user) => {
            if (error) {
                console.log("error in getting file", error);
            } else {
                if (user === 'pass') {
                    response.send('wrong userpass')
                } else if (user) {
                    let hashedCookie = sha256(user.id + 'logged_id' + secret);
                    let dataSet = {
                        user : user
                    }
                    response.cookie('user_id', user.id);
                    response.cookie('loggedin', hashedCookie);
                    // response.render('home', dataSet);
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
        db.tweedr.createUser(newUser, (error, user) => {
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
            db.tweedr.displayHome(userId, (error, user) => {
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
            db.tweedr.checkUserId(userId, (error, user) => {
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

        db.tweedr.createTweet(newTweet, (error, user) => {
            if (error) {
                console.log("error in getting file", error);

            } else {
                let currentCookieSesh = sha256(cookie.user_id + 'logged_id' + secret)
                if ( cookie.loggedin === currentCookieSesh ) {
                    response.redirect('home');
                } else {
                    response.send('wrong user')
                }
            }
        });
    };

    // let showHome2 = (request, response) => {

    //     let cookie = request.cookies;

    //     db.tweedr.checkUserId(cookie.user_id, (error, user) => {
    //         if (error) {
    //             console.log("error in getting file", error);

    //         } else {

    //             let result = checkCookie(cookie);
    //             if ( result === 'correctuser') {
    //                 let dataSet = {
    //                     user : user
    //                 }
    //                 response.render('home', dataSet);

    //             } else if (result === 'wronguser') {
    //                 response.send('wrong user');

    //             } else {
    //                 response.send('please login!');
    //             }
    //         }
    //     });
    // };

    // let checkCookie = (cookie) => {
    //     if(cookie.loggedin === undefined ) {
    //         return undefined;
    //     } else {
    //         let currentCookieSesh = sha256(cookie.user_id + 'logged_id' + secret);
    //         if (cookie.loggedin === currentCookieSesh) {
    //             return 'correctuser';
    //         } else {
    //             return 'wronguser';
    //         }
    //     }
    // }

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
    logout,
    redirect,
    // showHome2,
  };

}