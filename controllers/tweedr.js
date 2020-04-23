module.exports = (db) => {
  const sha256 = require('js-sha256');
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexControllerCallback = (request, response) => {
    
    db.tweedr.getAll((error, allTweets) => {
      response.render('tweedr/index', { allTweets });
    });
  };
  let login = (request, response) => {

    response.render('tweedr/login');
  };
  let signup = (request, response) => {

    response.render('tweedr/signup');

  };

  let signupPost = (request, response) => {
    var dataIn = request.body;
    db.tweedr.signup(dataIn, (error, result) => {
      var username = request.body.username;
      var userId = result[0].userid;
      response.cookie('username', username);
      response.cookie('userId', userId);
      response.cookie('loggedin', sha256('true'));
      var output = {'loggedin':sha256('true')}
      response.render('tweedr/index',output);
    });
  };

  let loginPost = (request, response) => {
    var dataIn = request.body;
    db.tweedr.login(dataIn, (error, result) => {
      response.cookie('username', result.username);
      response.cookie('userId', result.userid);
      response.cookie('loggedin', sha256('true'));
      var output = {'loggedin':sha256('true')}
      response.render('tweedr/index',output);
    });
  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    login: login,
    signup: signup,
    signupPost: signupPost,
    loginPost: loginPost
  };

}
