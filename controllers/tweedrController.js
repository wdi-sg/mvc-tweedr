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
    let userName = request.cookies["user_name"]
    db.tweets.allTweets(userId,  (error, result) => {
      if (error) {
        console.error("query error:", error.stack);
        response.send("query error");
      } else {
        const data = {
          result: result,
          username: userName
        }
       
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
  
  let allUsers = (request, response) => {
    let userId = request.cookies["user_id"]
    db.tweets.allTweedrUsers(userId, (error, result) => {
      if (error) {
        console.error("query error:", error.stack);
        response.send("query error");
      } else {
       
        const data = {
          result: result,
          userid: userId
        }
        console.log(userId)
        response.render('tweedr/allUsers', data)
      }
    })
  }

  let user = (request, response) => {
    let id = request.params.id;
    db.tweets.tweedrUser(id, (error, result) => {
      if (error) {
        console.error("query error:", error.stack);
        response.send("query error");
      } else {
       
        const data = {
          result: result
          
        }
   
        response.render('tweedr/user', data)
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
    addTweet: addTweet,
    allUsers: allUsers,
    user: user
  };
};
