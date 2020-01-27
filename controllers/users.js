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
      // This is the profile page of who we are looking at.
      const userID = request.params.id;
      const logInToken = request.cookies.loginToken;
      // This is who is logged in (0 = not logged in);
      let clientUserID = 0;
      // Get username & info.
      let sendViewData = {};

      // Verify our user is logged in.
      const callbackFunction = (id) => {
          if (!id) {
              clientUserID = 0;
          } else {
            clientUserID = id;
          }
          db.users.retrieveUserName(userID, executeAfterFindingUsername);
        };

      const executeAfterFindingUsername = (err, result) => {
        if (err) {
          console.log(err);
          const messageString = "Error!"
          const data = { message: messageString }
          response.render('message', data)
          return;
        } else {
          sendViewData.username = result.username;
          sendViewData.clientUserID = clientUserID;
          db.users.getUsersWhoFollow(userID, executeAfterFindingUsersWhoFollow)
        }
      }

      const executeAfterFindingUsersWhoFollow = (err, result) => {
        if (err) {
          console.log(err);
          const messageString = "Error!"
          const data = { message: messageString }
          response.render('message', data)
          return;
        } else {
          if (result == null) {
            sendViewData.followers = [];
          } else {
            sendViewData.followers = result;
          }
          sendViewData.userID = userID;
          console.log(sendViewData);
          response.render('users/userinfo', sendViewData)
        }
      }

      // Get list of who they follow.
      // Get list of who follows them.
      db.users.verifyUserSignedIn(logInToken, callbackFunction);
    }



    const listAllUsers = (request, response) => {
      const data = { message: 'You are pretty nosy wanting a list of all the users.' };
      response.render('message', data);
    }

    const followUser = (request, response) => {
      const followedUserID = request.body.followedUserID;
      const followerUserID = request.body.followerUserID;
      const logInToken = request.cookies.loginToken;
      console.log('followUser begin:');
      console.log(followedUserID, followerUserID);

      const putFollowerInformationInDB = (id) => {
        if (!id) {
          response.redirect('/signin/')
          return
        }
        console.log('about to execute haveUsrAFollowUserB');
        console.log(followedUserID, followerUserID);
        db.users.haveUserAFollowUserB(followerUserID, followedUserID, viewControllerCallback);
      }

      const viewControllerCallback = (err, result) => {
        if (err) {
          console.log('Error', err);
        } else {
          const redirectURL = `/users/${followerUserID}`;
          response.redirect(redirectURL);
        }
      }

      db.users.verifyUserSignedIn(logInToken, putFollowerInformationInDB);
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
        viewUserDetails: viewUserDetails,
        followUser: followUser
    };

}
