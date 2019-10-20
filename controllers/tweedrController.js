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
          const data = {
            message: "Error: Please Try Again"
          }
          response.render('tweedr/login', data)

          // response.send("WRONG PASSWORD");
        } else if (user) {
          let hashCookie = sha256(SALT + user.id);
          response.cookie("logged_in", hashCookie);
          response.cookie("user_id", user.id);
          response.cookie("user_name", user.username)
       
          response.redirect('/tweedr/home')
        } else {
          const data = {
            message: "Please Try Again"
          }
          response.render('/tweedr/login', data)
        }
      } 
    });
  };

  let homePage = (request, response) => {
    let userId = request.cookies["user_id"];
    let userName = request.cookies["user_name"]
    db.tweets.allTweets(userId, (error, result) => {
      if (error) {
        console.error("query error:", error.stack);
        response.send("query error");
      } else if(result === "no followers"){
        console.log("NO FOLLOWERS");
        db.tweets.getOwnTweet(userId, (error, result) => {
        const data = {
          result: result,
          username: userName
        }
        console.log(result, userName)
        response.render('tweedr/home', data)
        
        })
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

  let follow = (request, response) => {
    let id = request.body.id;
    let followerId = request.cookies["user_id"]

    db.tweets.follower(id, followerId, (error, result) => {
      if (error) {
        console.error("query error:", error.stack);
        response.redirect('/tweedr/users')
      } else {
   
        response.redirect('/tweedr/users')
      }
    })
  }

  let following = (request, response) => {
    let userId = request.cookies["user_id"]
    db.tweets.getFollowing(userId, (error, result) => {
      if (error) {
        console.error("query error:", error.stack);
        response.send("query error");
      } else if(result === null) {
        const data = {
          message : "empty"
        }
        response.render('tweedr/following', data)
      } else {
        const data = {
          result: result
        }
        console.log(result)
        response.render('tweedr/following', data)
      }
    })
  }

  let followers = (request, response) => {
    let userId = request.cookies["user_id"]
    db.tweets.getFollowers(userId, (error, result) => {
      if (error) {
        console.error("query error:", error.stack);
        response.send("query error");
      } else if(result === null) {
        const data = {
          message : "empty"
        }
        response.render('tweedr/followers', data)
        
      } else {
        const data = {
          result: result
        }
        
        response.render('tweedr/followers', data)
      }
    })
  }

  let logout = (request, response) => {
    response.clearCookie("user_id")
    response.clearCookie("logged_in")
    response.clearCookie("user_name")
    response.redirect('/welcome')
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
    user: user,
    follow: follow,
    following: following,
    followers: followers,
    logout: logout
  };
};
