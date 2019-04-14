const sha256 = require('js-sha256');
const SALT = 'shrek';

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

    let login = (request, response) => {

        response.render('main/login');

    };

    let loggedIn = (request, response) => {

        const data = {
            name: request.body.name,
            password: sha256(request.body.password)
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
                response.render('main/profile', {user: result[0]});
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
    index: login,
    done: loggedIn,

  };

}