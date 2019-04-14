module.exports = db => {
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */
  const hash = require('js-sha256');
  const SALT = "pepper";

  let indexControllerCallback = (request, response) => {
    let data = {};
    data["userId"] = request.cookies.userId;

    db.tweedr.getAll((error, allTweets) => {
      data["allTweets"] = allTweets;
      response.render("tweedr/index", data);
    });
  };

  /**
   * ===========================================
   * Create Tweet
   * ===========================================
   */

  let tweetCreateControllerCallback = (request, response) => {
    console.log(request.body);
    console.log(request.query);
    console.log(request.cookies.userId);

    db.tweedr.makeTweet(request.body, (error, queryResult) => {
      if (error) {
        console.error("error making tweet:", error);
        response.sendStatus(500);
      }
      if (queryResult.rowCount >= 1) {
        console.log("Tweet created successfully");
      } else {
        console.log("Tweet could not be created");
      }
      response.redirect("/");
    });
  };

  /**
   * ===========================================
   * Login Page Rendering
   * ===========================================
   */

  let loginControllerCallback = (request, response) => {
    response.render("tweedr/login");
  };

  /**
   * ===========================================
   * Login Query Check
   * ===========================================
   */

  let loginQueryControllerCallback = (request, response) => {
    let username
    if (request.query.username !== undefined) {
      username = request.query.username.toString();
    }
    let password
    if (request.query.password !== undefined) {
      password = request.query.password.toString();
    }
    db.tweedr.login(request.query, (error, queryResult, password) => {
      if (error) {
        console.log(error);
      } else {
        let loginValidation = {};
        if (queryResult === null) {
          loginValidation["username"] = false;
          loginValidation["password"] = true;
          response.render("tweedr/login", loginValidation);
        } else if (queryResult !== null && password === false) {
          loginValidation["username"] = true;
          loginValidation["password"] = password;
          response.render("tweedr/login", loginValidation);
        } else {
          let cookie = hash(SALT + username + password);
          response.cookie("userId", cookie);
          response.redirect("/");
        }
      }
    });
  };

  /**
   * ===========================================
   * Register Page
   * ===========================================
   */
  let registerControllerCallback = (request, response) => {
    response.render("tweedr/register");
  };


  /**
   * ===========================================
   * Register Query Check
   * ===========================================
   */

  let registerQueryControllerCallback = (request, response) => {
    db.tweedr.register(request.body, (error, queryResult, password) => {
      if (error) {
        console.log(error);
      } else {
        let registerValidation = {};
        if (queryResult === null) {
          registerValidation["username"] = false;
          registerValidation["password"] = true;
          response.render("tweedr/register", registerValidation);
        } else if (queryResult !== null && password === false) {
          registerValidation["username"] = true;
          registerValidation["password"] = password;
          response.render("tweedr/register", registerValidation);
        } else {
          response.render("tweedr/login");
        }
      }
    });
  };

  let logoutControllerCallback = (request, response) => {
    response.clearCookie("userId")
    response.render("tweedr/logout");
  };

  return {
    index: indexControllerCallback,
    tweetCreate: tweetCreateControllerCallback,
    login: loginControllerCallback,
    loginQuery: loginQueryControllerCallback,
    register: registerControllerCallback,
    registerQuery: registerQueryControllerCallback,
    logout: logoutControllerCallback
  };
};
