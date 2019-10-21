const sha256 = require("js-sha256");
var SALT = "killme;"

module.exports = (db) => {

    const homeControllerCallback = (request, response) => {
        db.home.getAll(error, allUsers) => {
            response.render("home", {allUsers});
        };
    };

    const registration = (request, response) => {
        db.home.getAll(error, allUsers) => {
            response.render("register", {allUsers});
        };
    };


  return {
    home: homeControllerCallback,
  };

}