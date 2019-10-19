const sha256 = require("js-sha256");

module.exports = db => {
  let SALT = "SuperSecreTPassWord";
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let welcomeCallback = (request, response) => {
    response.render("tweedr/welcome");
  };

  let registerPage = (request, response) => {
    response.render("tweedr/register")
  };

  let register = (request, response) => {
    let newUser = request.body;
    db.tweets.addUser(newUser, (error, user) => {
      if (error) {
        console.error("query error:", err.stack);
        response.send("query error");
      } else {
        response.redirect('/welcome')
      }
    })
  }

  let logInCallback = (request, response) => {
    response.render("tweedr/login");
  };

  let login = (request, response) => {
    let currentUser = request.body;
    db.tweets.checkUser(currentUser, (error, user) => {
      if (error) {
        console.error("query error:", err.stack);
        response.send("query error");
      } else {
        if (user === "correct") {
          response.send("WRONG PASSWORD");
        } else if (user) {
          let hashCookie = sha256(SALT + user.id);
          response.cookie("logged_in", hashCookie);
          response.cookie("user_id", user.id);
          response.cookie("user_name", user.username)
          // const data = {
          //   username: user.username
          // }
          response.redirect('/tweedr/home')
        } else {
          response.send('wrong id')
        }
      } 
    });
  };

  let homePage = (request, response) => {
    let userId = request.cookies["user_id"];
    db.tweets.allTweets(userId,  (error, result) => {
      if (error) {
        console.error("query error:", error.stack);
        response.send("query error");
      } else {
        const data = {
          result: result
        }
        console.log(result)
        response.render('tweedr/home', data)
      }
    })

  
  }

  let addTweet = (request, response) => {
    let tweet = request.body;
    let userId = request.cookies["user_id"]
    db.tweets.addNewTweet(tweet, userId, (error, result) => {
      if (error) {
        console.error("query error:", error.stack);
        response.send("query error");
      } else {
        response.redirect('/tweedr/home')
      }
    })
  }
  



  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    welcomePage: welcomeCallback,
    logInPage: logInCallback,
    login: login,
    registerPage: registerPage,
    register: register,
    home: homePage,
    addTweet: addTweet
  };
};
