const sha256 = require("js-sha256");

module.exports = (db) => {
  let displayLoginPage = (request, response) => {
    response.render("./auth/login");
  };

  let displayRegistration = (request, response) => {
    response.render("./auth/register");
  };

  let submitRegistration = (request, response) => {
    // console.log(request.body);
    //Callback if all registration fields are correctly filled
    let cbRender = (err, result) => {
      console.log(result.rows);
      let obj = {
        comments: "Registration successful! Please proceed to login.",
      };
      response.render("./auth/register-success", obj);
    };

    let cbCheckUsernameAndDp = (err, result) => {
      //Check dp_url is valid
      let dpState = db.users.checkDpUrl(request.body.dp_url);
      let usernameState = true;
      if (result.rows.length === 0 || err) {
        usernameState = false;
      }
      // console.log(usernameState);
      //Perform different actions depending on username and dp_url validity
      if (dpState && !usernameState) {
        db.users.writeNewUser(request.body, cbRender);
      } else if (usernameState) {
        let obj = {
          comments: "Username already taken. Please choose an alternative.",
        };
        response.render("./auth/register", obj);
      } else if (!dpState) {
        let obj = {
          comments: "Invalid URL entered. Please try again.",
        };
        response.render("./auth/register", obj);
      }
    };
    db.users.checkUsernameDuplicate(
      request.body.username,
      cbCheckUsernameAndDp
    );
  };

  let submitLogin = (request, response) => {
    console.log(request.body);
    let loginUsername = request.body.username;
    let loginpw = sha256(request.body.password);
    let cbVerifyUser = (err, result) => {
      console.log("result:", result);
      if (result.length > 0) {
        let id = result[0].id;
        let name = result[0].username;
        response.cookie("userid", id);
        response.cookie("username", name);
        response.cookie("loggedin", sha256("true"));
        response.render("home");
      } else {
        let obj = {
          comments: "User not found. Please try again."
        };
        response.render("./auth/login", obj);
      }
    };
    db.users.verifyUser(loginUsername, loginpw, cbVerifyUser);
  };

  let logout = (request, response) => {
    let obj = {
      comments: "Logout success!",
    };
    response.clearCookie("userid");
    response.clearCookie("username");
    response.clearCookie("loggedin");
    response.render("./auth/logout", obj);
  };

  return {
    displayLoginPage: displayLoginPage,
    displayRegistration: displayRegistration,
    submitRegistration: submitRegistration,
    submitLogin: submitLogin,
    logout: logout
  };
};
