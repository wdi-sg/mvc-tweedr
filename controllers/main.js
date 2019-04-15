const sha256 = require('js-sha256');
const SALT = 'shrek';

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

    let indexControllerCallback = (request, response) => {
      db.tweeds.getAll((error, tweedsData) => {
        response.render('main/index', { tweeds: tweedsData });
      });
    };

    let login = (request, response) => {

            response.render('main/login');

    };

    let loggedIn = (request, response) => {

        const data = {
            name: request.body.name,
            password: sha256(request.body.password + SALT)
        }

        console.log(data);

        const doneWithQuery = (result) => {
            console.log(result);

            if (result === "Password is wrong") {
                response.send("Password is wrong");
            } else if (result === "Username not found") {
                response.send("Username not found");
            } else {

                let secretCookie = sha256(SALT + data.name);
                response.cookie('loggedin', secretCookie);
                console.log(result);
                response.render('main/user', {user: result.user, tweeds: result.tweeds});
                // response.send("worrrksss");
            }
        }

        db.login.login(data, doneWithQuery);

    };




  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    main: indexControllerCallback,
    index: login,
    done: loggedIn

  };

}