module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    const postNewMessage = (request, response) => {
        // First need to authenticate the user and get their ID.
        const logInToken = request.cookies.loginToken;
        const message = request.body.message;

        const displayConfirmation = (err, result) => {
            if (err) {
                console.log(err)
            }
            response.render('message', {
                message: "Tweed Posted!"
            });
        }

        const postMessage = (userID) => {
            if (userID) {
                db.messages.postMessage(message, userID, displayConfirmation);
            } else {
                console.log('invalid userID');
            }
        }

        db.users.verifyUserSignedIn(logInToken, postMessage);
    };

    // Display a new message page if the user is logged in.
    const newMessageForm = (request, response) => {
        const logInToken = request.cookies.loginToken;

        const displayNewMessageForm = (message, userID, callbackFunction) => {
            response.render('messages/newmessage', {
                userID: userID
            });
        }

        db.users.verifyUserSignedIn(logInToken, displayNewMessageForm);
    }

    // Home page, list all messages, show a box to put in a new message if logged in.
    const displayAllMessages = (request, response) => {

        let isloggedin = false;
        let user_id = 0;
        const logInToken = request.cookies.loginToken;

        const afterValidateLogin = (userID) => {
            user_id = userID;
            db.messages.selectAllMessages(sendMessagesToViewController);
        }

        const sendMessagesToViewController = (err, result) => {
            let signedinstatus = {
                userID: user_id
            }
            data = {
                messages: result,
                signedin: signedinstatus,
                title: 'All Tweeds by everyone in the whole world'
            };
            response.render('messages/allmessages', data);
        }
        db.users.verifyUserSignedIn(logInToken, afterValidateLogin);
    }

    // Show one message with ID.
    const displayIndividualMessage = (request, response) => {
        let isloggedin = false;
        let user_id = 0;
        let messageID = request.params.id;
        const logInToken = request.cookies.loginToken;

        const sendMessageToViewController = (err, result) => {

            let signedinstatus = {
                userID: user_id
            }
            data = {
                message: result,
                signedin: signedinstatus
            };
            response.render('messages/individualmessage', data);
        };

        const afterValidateLogin = (userID) => {
            user_id = userID;
            db.messages.selectIndividualMessage(messageID, sendMessageToViewController);
        }
        db.users.verifyUserSignedIn(logInToken, afterValidateLogin);
    }

    // Show form to edit one message.
    const editMessageForm = (request, response) => {
        let isloggedin = false;
        let user_id = 0;
        let messageID = request.params.id;
        const logInToken = request.cookies.loginToken;

        const sendMessageToViewController = (err, result) => {
            let signedinstatus = {
                userID: user_id
            }
            let data = {
                message: result,
                signedin: signedinstatus
            };
            if (signedinstatus.userID === result.user_id) {
                response.render('messages/editmessage', data);
            } else {
                response.status(300).redirect('/signin/')
            }

        };

        const afterValidateLogin = (userID) => {
            user_id = userID;

            db.messages.selectIndividualMessage(messageID, sendMessageToViewController);
        }
        db.users.verifyUserSignedIn(logInToken, afterValidateLogin);
    }

    // When we receive a message, put it out there!
    const editMessagePut = (request, response) => {
        // First need to authenticate the user and get their ID.
        const logInToken = request.cookies.loginToken;
        const message = request.body.message;
        const messageURL = `/messages/${request.body.messageID}`;
        const messageID = request.body.messageID;

        const displayConfirmation = (err, result) => {
            if (err) {
                console.log(err)
            } else {
                response.redirect(messageURL);
            }
        };

        const editTheMessage = (userID) => {
            let user_id = userID;

            if (userID) {
                db.messages.editMessage(message, user_id, messageID, displayConfirmation);
            } else {
                console.log('invalid userID');
            };
        };

        db.users.verifyUserSignedIn(logInToken, editTheMessage);
    }

    const deleteMessage = (request, response) => {
        const logInToken = request.cookies.loginToken;
        const messageURL = `/messages/${request.body.messageID}`;
        const messageID = request.body.messageID;
        const submitUserID = request.body.userID;
        let user_id = 0;

        const displayConfirmation = (err, result) => {
            if (err) {
                console.log(err)
            } else {
                response.render('message', {message: 'message deleted'});
            }
        }

        const deleteTheMessage = (userID) => {
            user_id = userID;
            console.log(submitUserID);
            console.log(userID);
            if (userID == submitUserID) {
                db.messages.deleteMessage(messageID, user_id, displayConfirmation);
            } else {
                response.render('message', {message: 'You do not have permission to delete this Tweed.'})
            };
        };


        db.users.verifyUserSignedIn(logInToken, deleteTheMessage);
    }



    const displayFollowedMessages = (request, response) => {
        const logInToken = request.cookies.loginToken;
        let followedUsers = []
        let filteredMessages = []
        let viewModelData = {}
        let userID = 0

        const isByAFollowedUser = (message) => {
          for (const user of followedUsers) {
            if (user.id === message.user_id) {
              return true;
            }
          }
          return false;
        }

        const getFollowedAccounts = (id) => {
          userID = id;
          console.log(userID);
          db.users.getUsersFollowedBy(userID, selectAllMessages);
        }

        const selectAllMessages = (err, result) => {
          console.log(result);
          if (err) {
            console.log('error!', err)
            return;
          } else {
            followedUsers = result
          }
          db.messages.selectAllMessages(filterMessages);
        }

        const filterMessages = (err, result) => {
          if (err) {
            console.log('error!', err)
            return;
          } else {
            filteredMessages = result.filter(isByAFollowedUser);
            console.log(filteredMessages);
            viewModelData.messages = filteredMessages;
            viewModelData.signedin = {}
            viewModelData.signedin.userID = userID;
            viewModelData.title = "All Tweeds by users you follow.";

            response.render('messages/allmessages', viewModelData);
          }
        }

        db.users.verifyUserSignedIn(logInToken, getFollowedAccounts);
    }

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        newMessageForm: newMessageForm,
        postNewMessage: postNewMessage,
        displayAllMessages: displayAllMessages,
        displayIndividualMessage: displayIndividualMessage,
        editMessageForm: editMessageForm,
        editMessagePut: editMessagePut,
        deleteMessage: deleteMessage,
        displayFollowedMessages: displayFollowedMessages
    };

}
