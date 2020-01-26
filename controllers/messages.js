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
      // const userID = request.body.userID;

      const displayConfirmation = (err, result) => {
        if (err) {
          console.log(err)
        }
        response.render('message', { message: "Tweed Posted!" });
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

  const newMessageForm = (request, response) => {
    const logInToken = request.cookies.loginToken;

    const displayNewMessageForm = (message, userID, callbackFunction) => {
      response.render('messages/newmessage', {userID: userID});
    }

    db.users.verifyUserSignedIn(logInToken, displayNewMessageForm);

  }


  const displayAllMessages = (request, response) => {

    let isloggedin = false;
    let user_id = 0;
    const logInToken = request.cookies.loginToken;

    const afterValidateLogin = (userID) => {
        user_id = userID;
        db.messages.selectAllMessages(sendMessagesToViewController);
    }

    const sendMessagesToViewController = (err, result) => {
      console.log(result);
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

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    newMessageForm: newMessageForm,
    postNewMessage: postNewMessage,
    displayAllMessages: displayAllMessages
  };

}
