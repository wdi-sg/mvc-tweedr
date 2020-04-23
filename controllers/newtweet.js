module.exports = (db) => {
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let newTweetCallback = (request, response) => {
    const whenDoneInModel = (error, result) => {
      console.log("FFFRROOOMMM CONTROLLER");
      console.log(result);
      if (result[0].name === request.body.username) {
        let reqPassword = request.body.password;
        if (reqPassword === result[0].password) {
          response.cookie("LoginCookie", true);
          response.send("HEEELLLOOOO");
        } else {
          response.send("Incorrect Password");
        }
      } else {
        response.send("No such user! Please register for an account");
      }
    };
    console.log(request.body.username);
    db.newTweetModel.userLoggedIn(request.body.username, whenDoneInModel);
  };
  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    newTweetCallback: newTweetCallback,
  };
};
