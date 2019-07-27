module.exports = (db) => {
    var sha256 = require('js-sha256');
    var SALT = 'bonk';
    var loggedTrue = sha256('true'+SALT);

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

   // db.tweedr.getAll((error, allTweets) => {
      //   response.render('tweedr/index', { allTweets });
      // });

  let indexCC = (request, response) => {
      db.tweedr.getAll((error, tweets) => {
        response.render('tweedr/home', { tweets });
      });
  };

  let loginCC = (request, response) => {
    //pass in request.query data
    if (request.cookies.loggedIn === loggedTrue){
        console.log("Already logged in!");
        response.redirect('/');
    } else {
        db.tweedr.login(request.query, (err, result) => {
        console.log("CC", result)
        response.cookie('loggedIn', loggedTrue);

        response.redirect('/');
    })
    }

  };

  let signupCC = (request, response) => {
    db.tweedr.signup(request.query, (err, result) => {
        console.log("CC", result);
        response.redirect('/');
    })
  }

  let getAllTweetsCC = (request, response) => {
    db.tweedr.getAllTweets((err, allTweets) => {
        console.log(allTweets);
        response.render('tweedr/home', { allTweets });
    })
  }

  let logoutCC = (request, response) => {
    console.log("logging out")
    response.clearCookie('loggedIn');
    response.redirect('/');
  }




  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexCC,
    login: loginCC,
    signup: signupCC,
    allTweets: getAllTweetsCC,
    logout: logoutCC
  };

}