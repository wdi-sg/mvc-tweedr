const sha256 = require("js-sha256");
const SALT = process.env.SALT;

module.exports = (db) => {
  // Controller logic
  const homeControllerCallback = (request, response) => {
    db.home.getAll((error, allUsers) => {
      response.render("home", {allUsers});
    });
  };

  const getRegister = (request, response) => {
    db.home.getAll((error, allUsers) => {
      response.render("register", {allUsers});
    });
  };

  const register = (request, response) => {
    const {name} = request.body;
    const password = sha256(request.body.password + SALT);
    const account = {name, password};
    db.home.postRegister(account, (error, callback) => {
      console.log(callback);
      response.redirect("users");
    });
  };

  const login = (request, response) => {
    db.home.getAll((error, allUsers) => {
      response.render("login", {allUsers});
    });
  };

  // Export controller functions as a module
  return {
    home: homeControllerCallback,
    getRegister,
    register,
    login,
  };
};
