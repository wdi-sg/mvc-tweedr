module.exports = (db) => {
  var sha256 = require("js-sha256");
  const SALT = "hello";
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
        let reqPassword = sha256(request.body.password);
        if (reqPassword === result[0].password) {
          let user_id = result[0].id;
          var hashedCookie = sha256(SALT + user_id);
          response.cookie("LoginCookie", hashedCookie);
          response.cookie("LoginCookie2", user_id);
          const data = {
            signedInUser: result[0],
          };
          // console.log(data.signedInUser.id);
          response.render("createNewTweet", data);
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
