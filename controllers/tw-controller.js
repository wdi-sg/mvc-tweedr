const sha256 = require('js-sha256');


module.exports = (db) => {

    let secret = 'secretpassword9090'
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

    let index = (request, response) => {
        response.render('index');
    };

    let login = (request, response) => {
        response.render('login');
    };

    let checkLogin = (request, response) => {
        let user = request.body;
        db.tweedr.checkUserName(user, (error, user) => {
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

                    response.render('home', dataSet);
                } else {
                    response.send('wrong userid')
                }

            }
        });
    };

    let register = (request, response) => {
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

    let home = (request, response) => {
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
                        response.render('home', dataSet);
                    } else {
                        response.send('wrong user')
                    }
                }
            });
        }
    };

    let redirect = (request, response) => {
      response.redirect('index');
    };

    let logout = (request, response) => {
      response.clearCookie('user_id');
      response.clearCookie('loggedin');
      response.redirect('index');
    };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index,
    login,
    checkLogin,
    register,
    createUser,
    home,
    redirect,
    logout,

  };

}