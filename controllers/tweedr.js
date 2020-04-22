var sha256 = require('js-sha256');
const SALT = "Tunr assignment zomg";
const cookieParser = require('cookie-parser')

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

//app.GET (register)
    let registerController = (request, response) => {
        response.render('tweedr/register');
    };

//app.POST (register)
    let registerPostController = (request, response) => {

        let hashedPassword = sha256( request.body.password + SALT );

        request.body.password = hashedPassword;

        db.tweedr.registerUser(request.body, (err, result) => {
            if (err) {
                response.send(err)

            } else {

                if (result) {
                    let user_id = result.rows[0].id;

                    let loggedInCookie = sha256( user_id + 'logged_id' + SALT );

                    response.cookie('user_name', result.rows[0].name);
                    response.cookie('loggedIn', loggedInCookie);
                    response.cookie('user_id', user_id);

                    response.redirect('/home');

                } else {
                    response.render('tweedr/usernameTaken');
                }
            }
        });
    };

//app.GET (login)
    let loginController = (request, response) => {
        response.render('tweedr/login');
    };

//app.POST (login)
    let loginPostController = (request, response) => {
        let hashedPassword = sha256( request.body.password + SALT );

        request.body.password = hashedPassword;

        db.tweedr.loginUser(request.body, (err, result) => {
            if (err) {
                response.send(err)

            } else {

                if(result.rows[0].password === hashedPassword) {
                    let user_id = result.rows[0].id;

                    let loggedInCookie = sha256( user_id + 'logged_id' + SALT );

                    response.cookie('user_name', result.rows[0].name);
                    response.cookie('loggedIn', loggedInCookie);
                    response.cookie('user_id', user_id);

                    response.redirect('/home');

                } else {
                    response.render('tweedr/wrongPwd');
                }
            }
        });
    };

//app.GET (home - write new tweed)
    let homeController = (request, response) => {

        if( request.cookies.loggedIn === undefined || request.cookies.loggedIn === "nahh" ){
            response.render('/');

        }else{

            db.tweedr.showTweed(request.body, (err, result) => {
                if (err) {
                    response.send(err)
                }

                else {
                    let data = {
                        allTweeds : result.rows
                    }
                    response.render('tweedr/home', data);
                }
            });
        };
    };

//app.POST (home - post new tweed)
    let homePostController = (request, response) =>{

        db.tweedr.postTweed(request.body, request.cookies, (err, result) => {
            if (err) {
                response.send(err)

            } else {
                response.redirect('/home')
            };
        });
    };

//app.GET (default home - not login)
    let rootController = (request, response) => {
        db.tweedr.showTweed(request.body, (err, result) => {
            if (err) {
                response.send(err)
            }

            else {
                let data = {
                    allTweeds : result.rows
                }
                response.render('tweedr/root', data);
            }
        });
    };

//app.GET (logout)
    let logoutController = (request, response) => {
        response.cookie('loggedIn', "nahh");
        response.redirect('/')
    };



  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    login: loginController,
    loginPost: loginPostController,
    register: registerController,
    registerPost: registerPostController,
    home: homeController,
    homePost: homePostController,
    logout: logoutController,
    root: rootController,
  };

}