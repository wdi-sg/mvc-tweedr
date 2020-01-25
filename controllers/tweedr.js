const sha256 = require("js-sha256");
const SALT = require("../salt");

module.exports = db => {
  const showRegisterForm = (request, response) => {
    response.render("register");
  };

  const registerUser = (request, response) => {
    const username = request.body.username;
    const password = sha256(SALT + request.body.password);
    db.tweedr.registerUser(username, password, (err, result) => {
      if (err) console.log(err);
      else {
        console.log(result, "SUCCESS CREATING USER");
      }
    });
  };

  return {
    showRegisterForm: showRegisterForm,
    registerUser: registerUser
  };
};
