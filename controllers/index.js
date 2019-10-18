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
    db.home.postRegister(account, (error, results) => {
      if (results) {
        const user_id = results[0].id;
        const hashedCookie = sha256(SALT + user_id);
        response.cookie("user_id", user_id);
        response.cookie("Bearer", hashedCookie);
        response.redirect("/users");
      } else {
        response.status(403).send("Name already exists!");
      }
    });
  };

  const getLogin = (request, response) => {
    db.home.getAll((error, allUsers) => {
      response.render("login", {allUsers});
    });
  };

  const login = (request, response) => {
    const {name, password} = request.body;
    db.home.postLogin(name, (error, result) => {
      if (error) {
        response.send("Query error");
      } else {
        if (result) {
          const hashedRequestPassword = sha256( password + SALT );
          if (hashedRequestPassword === result[0].password) {
            const user_id = result[0].id;
            const hashedCookie = sha256(SALT + user_id);
            response.cookie("user_id", user_id);
            response.cookie("Bearer", hashedCookie);
            response.redirect("/users");
          } else {
            response.status(403).send("wrong password");
          }
        } else {
          response.status(403).send("no username");
        }
      }
    });
  };

  // Export controller functions as a module
  return {
    home: homeControllerCallback,
    getRegister,
    register,
    getLogin,
    login,
  };
};
