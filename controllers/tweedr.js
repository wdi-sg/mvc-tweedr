 //must npm install js-sha256 and use it here
var sha256 = require('js-sha256');
const SALT = "saltprotector";

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

//for ('/home') path and getting info from getAll in models
  let landingControllerCallback = (request, response) => {
        response.render('tweedr/landing');
  };

//for ('/') path and getting info from getAll in models
  let indexControllerCallback = (request, response) => {
    //db.tweedr de tweedr comes from db.js de line 98's key
      db.tweedr.getAll((error, allTweedr) => {
        // response.send(allTweedr.name);
        response.render('tweedr/index', { allTweedr });
      });
  };

//for get's ('/register') path
  let registerFormControllerCallback = (request, response) => {
    response.render('tweedr/register');
    // response.send('wana register?');
  };

//for post's ('register') path
  let registerControllerCallback = (request, response) => {
    //the username here is same with the queryResult in register's dbPoolInstance
    db.tweedr.register(request.body, (error, username) => {
        console.log(username);
        if (error) {
            console.log("Error", error);
            response.status(404).send('error', error);
        }
        if (username.rowCount = 1) {
            let user_id = username.rows[0].id;
            let hashedUser = sha256(user_id+SALT);
            //'username's value is undefined, able to register and redirect to homepage d but not able to add value to 'username's in cookie yet
            response.cookie('username', username.rows[0].name);
            response.cookie('loggedIn', hashedUser);
            response.cookie('userId', user_id);
            response.redirect('/');
        } else {
          console.log('User could not be created');
        }
        });
};

//for get's ('/register') path
  let loginFormControllerCallback = (request, response) => {
    response.render('tweedr/login');
    // response.send('wana register?');
  };

//for post's ('login') path
  let loginControllerCallback = (request, response) => {
    //the loginName here is same with the queryResult in login's dbPoolInstance
    db.tweedr.login(request.body, (error, loginName) => {
        console.log(loginName);
        if (error) {
            console.log("Error", error);
            response.status(404).send('error', error);
        } else {
            if (loginName.rowCount.length === 0) {
                response.send('Empty Result');
            } else {
                if (loginName.rowCount[0] === 0) {
                    response.send('Nothing here!')
                } else {
                        let hashedRequestPw = sha256(request.body.password + SALT);
                        if (loginName.rows[0].password === hashedRequestPw) {
                            let user_id = loginName.rows[0].id;
                            let hashedUser = sha256(user_id+SALT);
                            response.cookie('username', request.body.name);
                            response.cookie('loggedIn', hashedUser);
                            response.cookie('userId', user_id);
                            response.redirect('/');
                        } else {
                        response.send('Incorrect Password!');
                        }
                }
            }
        }
    });
  };

  //for get's ('/new') path
  let newFormControllerCallback = (request, response) => {
    response.render('tweedr/new');
    // response.send('wana register?');
  };

  let logoutControllerCallback = (request, response) => {
    response.clearCookie("loggedIn");
    response.clearCookie("userId");
    response.clearCookie("username");
  //TODO response.redirect('/'), can redirect to home page or some other pages
    response.render('tweedr/logout');
};

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    landing: landingControllerCallback,
    index: indexControllerCallback,
    registerForm: registerFormControllerCallback,
    register: registerControllerCallback,
    loginForm: loginFormControllerCallback,
    login: loginControllerCallback,
    newForm: newFormControllerCallback,
    logout: logoutControllerCallback
  };

}