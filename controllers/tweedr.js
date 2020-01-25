const sha256 = require("js-sha256");
const SALT = require("../salt");

module.exports = db => {
  const showHomepage = (request, response) => {
    const userID = request.cookies.userID;
    const username = request.cookies.username;
    const loggedIn = request.cookies.loggedIn;
    if (loggedIn !== undefined) {
      db.tweedr.getTweeds(userID, (err, result) => {
        const data = {
          userID: userID,
          username: username,
          loggedIn: loggedIn,
          tweeds: result
        };
        response.render("index", data);
      });
    } else {
      const data = {
        userID: userID,
        username: username,
        loggedIn: loggedIn
      };
      response.render("index", data);
    }
  };

  const showRegisterForm = (request, response) => {
    const data = {
      header: "Register",
      actionPath: "/register"
    };
    response.render("register", data);
  };

  const showLoginForm = (request, response) => {
    const data = {
      header: "Login",
      actionPath: "/login"
    };
    response.render("register", data);
  };

  const registerUser = (request, response) => {
    const username = request.body.username;
    const password = sha256(SALT + request.body.password);
    db.tweedr.registerUser(username, password, (err, result) => {
      if (err) {
        const data = {
          errorMessage:
            "Username already exists! Please choose a different username."
        };
        response.render("error", data);
      } else {
        const userID = result.id;
        const username = result.username;
        const hashedLogin = sha256(SALT + result.id);
        response.cookie("userID", userID);
        response.cookie("username", username);
        response.cookie("loggedIn", hashedLogin);
        response.redirect("/");
      }
    });
  };

  const loginUser = (request, response) => {
    const username = request.body.username;
    const password = sha256(SALT + request.body.password);
    db.tweedr.loginUser(username, password, (err, result) => {
      if (err === "User doesn't exist!") {
        const data = {
          errorMessage: err
        };
        response.render("error", data);
      } else if (err === "Wrong password!") {
        const data = {
          errorMessage: err
        };
        response.render("error", data);
      } else {
        const userID = result.id;
        const username = result.username;
        const hashedLogin = sha256(SALT + result.id);
        response.cookie("userID", userID);
        response.cookie("username", username);
        response.cookie("loggedIn", hashedLogin);
        response.redirect("/");
      }
    });
  };

  const logoutUser = (request, response) => {
    response.clearCookie("userID");
    response.clearCookie("username");
    response.clearCookie("loggedIn");
    response.redirect("/");
  };

  const newTweed = (request, response) => {
    const userID = request.cookies.userID;
    const username = request.cookies.username;
    const loggedIn = request.cookies.loggedIn;
    const data = {
      userID: userID,
      username: username,
      loggedIn: loggedIn
    };
    response.render("newTweed", data);
  };

  const postTweed = (request, response) => {
    const tweed = request.body.tweed;
    const userID = request.cookies.userID;
    db.tweedr.postTweed(tweed, userID, (err, result) => {
      if (err) response.send(err);
      else {
        response.redirect("/");
      }
    });
  };

  const showUser = (request, response) => {
    const userID = request.params.id;
    db.tweedr.showUser(userID, (err, result) => {
      if (result !== undefined) {
        const user = result;
        const currentUser = request.cookies.username;
        const data = {
          user: user,
          currentUser: currentUser
        };
        response.render("user", data);
      } else {
        response.send("User doesn't exist!");
      }
    });
  };

  const followUser = (request, response) => {
    const userID = request.params.id;
    const followerID = request.cookies.userID;
    db.tweedr.followUser(userID, followerID, (err, result) => {
      if (err) {
        console.log(err);
        const data = {
          errorMessage: "Already following this user!"
        };
        response.render("error", data);
      } else {
        response.redirect("/");
      }
    });
  };

  const seePostsOfFollowing = (request, response) => {
    const userID = request.cookies.userID;
    const username = request.cookies.username;
    const loggedIn = request.cookies.loggedIn;
    db.tweedr.seePostsOfFollowing(userID, (err, result) => {
      const data = {
        type: "following",
        followingTweets: result,
        userID: userID,
        username: username,
        loggedIn: loggedIn
      };
      response.render("following", data);
    });
  };

  const seePostsOfFollowers = (request, response) => {
    const userID = request.cookies.userID;
    const username = request.cookies.username;
    const loggedIn = request.cookies.loggedIn;
    db.tweedr.seePostsOfFollowers(userID, (err, result) => {
      const data = {
        type: "followers",
        followingTweets: result,
        userID: userID,
        username: username,
        loggedIn: loggedIn
      };
      response.render("following", data);
    });
  };

  const showTweed = (request, response) => {
    const tweedID = request.params.id;
    const userID = request.cookies.userID;
    const username = request.cookies.username;
    const loggedIn = request.cookies.loggedIn;
    db.tweedr.showTweed(tweedID, (error, result) => {
      const data = {
        tweed: result.tweed,
        user: result.user,
        userID: userID,
        username: username,
        loggedIn: loggedIn
      };
      response.render("tweed", data);
    });
  };

  const sortTweedsByDate = (request, response) => {
    const userID = request.cookies.userID;
    const username = request.cookies.username;
    const loggedIn = request.cookies.loggedIn;
    db.tweedr.sortTweedsByDate(userID, (err, result) => {
      const data = {
        userID: userID,
        username: username,
        loggedIn: loggedIn,
        tweeds: result
      };
      response.render("index", data);
      console.log(result);
    });
  };

  const showEditTweedPage = (request, response) => {
    const userID = request.cookies.userID;
    const username = request.cookies.username;
    const loggedIn = request.cookies.loggedIn;
    const tweedID = request.params.id;
    db.tweedr.getTweedForEdit(tweedID, (err, result) => {
      const data = {
        userID: userID,
        username: username,
        loggedIn: loggedIn,
        tweed: result
      };
      response.render("editTweed", data);
    });
  };

  const editTweed = (request, response) => {
    const userID = request.cookies.userID;
    const tweedID = request.params.id;
    const tweed = request.body.tweed;
    db.tweedr.editTweed(userID, tweedID, tweed, (err, result) => {
      console.log(err, result);
      if (err) response.send(err);
      else if (
        result === "You aren't the creator of this Tweed! Edit not allowed."
      ) {
        const data = {
          errorMessage: result
        };
        response.render("error", data);
      } else {
        response.redirect("/");
      }
    });
  };

  return {
    showHomepage: showHomepage,
    showRegisterForm: showRegisterForm,
    showLoginForm: showLoginForm,
    registerUser: registerUser,
    loginUser: loginUser,
    logoutUser: logoutUser,
    newTweed: newTweed,
    postTweed: postTweed,
    showUser: showUser,
    followUser: followUser,
    seePostsOfFollowing: seePostsOfFollowing,
    seePostsOfFollowers: seePostsOfFollowers,
    showTweed: showTweed,
    sortTweedsByDate: sortTweedsByDate,
    showEditTweedPage: showEditTweedPage,
    editTweed: editTweed
  };
};
