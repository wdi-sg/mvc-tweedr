const sha256 = require('js-sha256');
const SALT = 'meow meow poop';
const cookieParser = require('cookie-parser')

module.exports = (db) => {

    const login = (request, response) => {
        response.render('pages/login');
    }

    let loggingIn = (request, response) => {

            const data = {
                username: request.body.username,
                password: sha256(request.body.password + SALT)
            }

            //callback function after data has been sent
            //"result" is what is sent to callback from login model
            const loginResult = (result) => {
                console.log(result);

                if (result === "Incorrect password") {
                    response.send("Incorrect password");
                } else if (result === "Username does not exist") {
                    response.send("Username does not exist");
                } else {
                    console.log(result);
                    let loginCookie = sha256(SALT + data.username);
                    response.cookie('loggedin', loginCookie);
                    // response.send("You are now logged in!")
                    response.render('pages/user', {user: result.user, tweeds: result.tweeds});
                }
            }
            //sends data to login model with loginResult as the callback function
            db.login.login(data, loginResult)
    };
   /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
    return {
        // main: indexControllerCallback,
        start: login,
        end: loggingIn
    }
};