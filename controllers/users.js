const cookieParser = require('cookie-parser');

module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    // Page for user to sign in.
    const signInPage = (request, response) => {
        response.render('users/signinpage');
    };

    // Response when receiving username and password.
    const signIn = (request, response) => {
        let inputUsername = request.body.username;
        let inputPassword = request.body.password;

        const callbackFunction = (loginToken, user_id, expiry) => {
            response.cookie('loginToken', loginToken, {
                expires: expiry
            });
            data = {
                message: 'Signed in successfully!'
            };
            response.render('message', data);
            // redirect to home page.

        };

        db.users.signIn(inputUsername, inputPassword, callbackFunction);
    }

    // To register an account just redirect to register page.
    const registerPage = (request, response) => {
        response.render('users/registerpage');
    }

    // Registering a new account.
    const registerAccount = (request, response) => {
        const inputUsername = request.body.username;
        const inputPassword = request.body.password;

        const callbackFunction = (err, result) => {
            if (err) {
                console.log('error!', err);
                response.status(500).send('error!');
            } else {
                response.render('message', {
                    message: 'successfully registered account.'
                });
            }
        }

        db.users.registerAccount(inputUsername, inputPassword, callbackFunction);
    }


    // Check if the user is signed in and return the user ID. (Testing function)
    const checkIfSignedIn = (request, response) => {

        const logInToken = request.cookies.loginToken;

        const callbackFunction = (id) => {
            if (!id) {
                response.redirect('/signin');
            }
            response.render('message', {
                message: `User ID: ${id}`
            });
        }

        db.users.verifyUserSignedIn(logInToken, callbackFunction);

    }

    const viewUserDetails = (request, response) => {
      const userID = request.params.id;
      const messageString = 'This is where we would get a list of the details for user ID ' + userID
      const data = { message: messageString }
      response.render('message', data)
      // Get username & info.

      // Get list of who they follow.
      // Get list of who follows them.
    }

    const listAllUsers = (request, response) => {
      const data = { message: 'You are pretty nosy wanting a list of all the users.' };
      response.render('message', data);
    }

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        signInPage: signInPage,
        signIn: signIn,
        registerPage: registerPage,
        registerAccount: registerAccount,
        checkIfSignedIn: checkIfSignedIn,
        viewUserDetails: viewUserDetails
    };

}
