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
                signedin: signedinstatus
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
            console.log(result);
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
            console.log('user ID: ' + user_id);
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

        const postMessage = (userID) => {
            let user_id = userID;
            console.log(user_id);
            if (userID) {
                db.messages.editMessage(message, user_id, messageID, displayConfirmation);
            } else {
                console.log('invalid userID');
            };
        };

        db.users.verifyUserSignedIn(logInToken, postMessage);
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
        editMessagePut: editMessagePut
    };

}
