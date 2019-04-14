module.exports = db => {
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

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
    db.tweedr.login(request.query, (error, queryResult, password) => {
      if (error) {
        console.log(error);
      } else {
        let loginValidation = {};
        if (queryResult === null) {
          loginValidation["username"] = false;
          loginValidation["password"] = true;
          response.render("tweedr/login", loginValidation);
        } else if (queryResult !== null) {
          loginValidation["username"] = true;
          loginValidation["password"] = password;
          response.render("tweedr/login", loginValidation);
        } else {
          response.redirect("/");
        }
      }
    });
  };

  return {
    index: indexControllerCallback,
    tweetCreate: tweetCreateControllerCallback,
    login: loginControllerCallback,
    loginQuery: loginQueryControllerCallback
  };
};
