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

  let signupCC = (request, response) => {
    db.tweedr.signup(request.query, (err, result) => {
        console.log("CC", result);
        response.redirect('/');
    })
  }

  let loginCC = (request, response) => {
    //pass in request.query data
    if (request.cookies.loggedIn === loggedTrue){
        console.log("Already logged in!");
        response.redirect('/');
    } else {
        db.tweedr.login(request.query, (err, result) => {
        console.log("CC", result)
        response.cookie('loggedIn', loggedTrue);
        response.cookie('user', result.name);
        response.cookie('userid', result.id);

        response.redirect('/');
    })
    }

  };



  let logoutCC = (request, response) => {
    console.log("logging out")
    response.clearCookie('loggedIn');
    response.redirect('/');
  }

//also sends cookies to home
  let getAllTweetsCC = (request, response) => {
    db.tweedr.getAllTweets((err, allTweets) => {
        let data = {
            getAllTweets: allTweets,
            cookies: request.cookies
        }
        console.log(data)
        response.render('tweedr/home', data);
    })
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