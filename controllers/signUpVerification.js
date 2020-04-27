module.exports = (db) => {
  var sha256 = require("js-sha256");

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let signUpVerified = (request, response) => {
    const whenDoneInModel = (error, result) => {
      if (result === null) {
        const whenDoneInModel1 = (err, result) => {
          response.send("Thank you for signing up");
        };
        const values = [request.body.username, sha256(request.body.password)];
        db.newSignUpModel.createUser(values, whenDoneInModel1);
      } else {
        response.send("Username exists. Please sign up with another username.");
      }
    };
    const newUsername = request.body.username;
    // const newPassword = sha256(request.body.password);
    // const values = [newUsername, newPassword];
    db.newSignUpModel.checkUser(newUsername, whenDoneInModel);
  };
  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    signUpVerified: signUpVerified,
  };
};
