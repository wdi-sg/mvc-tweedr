const sha256 = require('js-sha256');
const SALT = 'banana';

module.exports = (db) => {
    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let getNewUser = (request, response) => {
        db.users.newUser((error, account) => {
            response.render('users/account', { account });
        });
    };

    let postNewUser = (request, response) => {
        let newUser = request.body;
        // check if name already exist
        db.users.checkUserName(newUser.name, (error, result) => {
            // if exist, request another name
            if (result !== null) {
                let account = {};
                account.title = "Register Account";
                account.message = "Name taken, please choose another name.";
                account.formAction = "/register";
                account.user = 0;
                response.render('users/account', { account });
            } else {
                // INSERT new user into user db
                newUser.password = sha256(newUser.password + SALT);
                db.users.registerUser(newUser, (error, account) => {
                    // set cookies
                    response.cookie('name', result[0].name);
                    response.cookie('loggedIn', result[0].password);
                    // redirect to homepage
                    response.redirect('/');
                });
            }
        });
    };

    let getUser = (request, response) => {
        // respond with HTML page with form to login
        db.users.currentUser((error, account) => {
            response.render('users/account', { account });
        });
    };

    let postUser = (request, response) => {
        // check user log in
        let user = request.body;
        // check if name is correct
        db.users.checkUserName(user.name, (error, result) => {
            // if name matches
            if (result !== null) {
                // check password
                user.password = sha256(user.password + SALT);
                if (user.password === result[0].password) {
                    // set cookies
                    response.cookie('name', result[0].name);
                    response.cookie('loggedIn', result[0].password);
                    // redirect to homepage
                    response.redirect('/');
                } else {
                    // inform of incorrect password
                    db.users.wrongPassword((error, account) => {
                        response.render('users/account', { account });
                    });
                }
            } else {
                // inform incorrect name
                db.users.wrongName((error, account) => {
                    response.render('users/account', { account });
                });
            }
        });
    };

    let exitUser = (request, response) => {
        //clear cookies
        response.clearCookie('loggedIn');
        response.clearCookie('name');
        response.redirect('/');
    };

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        newUser: getNewUser,
        registerUser: postNewUser,
        currentUser: getUser,
        loginUser: postUser,
        logoutUser: exitUser
    };
}
