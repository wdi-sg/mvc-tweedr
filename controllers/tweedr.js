module.exports = (db) => {
  const sha256 = require('js-sha256');
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let loadIndex = (request, response) => {

    // db.tweedr.getAll((error, allTweets) => {
    //   response.render('tweedr/index', { allTweets });
    // });

    var loggedIn = request.cookies['loggedIn'];
    if (loggedIn == sha256('true')) {
      response.redirect('/main');
    } else if (loggedIn == "") {
      db.tweedr.getTweets((error, result) => {
        var allTweets = result;
        console.log(allTweets);
        var output = {};
        output.tweets = allTweets;
        response.render('tweedr/index', output);
      });
    }

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
      var userid = result[0].userid;
      response.cookie('username', username);
      response.cookie('userid', userid);
      response.cookie('loggedIn', sha256('true'));
      // var output = {'loggedIn':sha256('true')}
      response.redirect('/main');
    });
  };

  let loginPost = (request, response) => {
    var dataIn = request.body;
    db.tweedr.login(dataIn, (error, result) => {
      response.cookie('username', result.username);
      response.cookie('userid', result.userid);
      response.cookie('loggedIn', sha256('true'));
      // var output = {'loggedIn':sha256('true'), 'username': result.username, 'userid': result.userid}
      response.redirect('/main');
    });
  };

  let loadMain = (request, response) => {
    var loggedIn = request.cookies['loggedIn'];
    if (loggedIn == "") {
      response.redirect('/');
    }
    else {
      // var dataIn = request.body;
      var username = request.cookies['username'];
      var userid = request.cookies['userid'];
      var loggedIn = request.cookies['loggedIn'];
      var output = { 'loggedIn': loggedIn, 'username': username, 'userid': userid }
      db.tweedr.getTweets((error, result) => {
        var allTweets = result;
        console.log(allTweets);
        output.tweets = allTweets;
        response.render('tweedr/main', output);
      });
    }
  };

  let logout = (request, response) => {
    // var dataIn = request.body;
    // db.tweedr.login(dataIn, (error, result) => {
    //   response.cookie('username', result.username);
    //   response.cookie('userid', result.userid);
    //   response.cookie('loggedIn', sha256('true'));
    //});
    response.cookie('username', "");
    response.cookie('userid', "");
    response.cookie('loggedIn', "");
    response.redirect('/');

  };

  let makePost = (request, response) => {
    var userid = request.cookies['userid'];
    // console.log(userid);

    var dataIn = request.body;
    dataIn.userid = userid;
    // console.log(dataIn);

    db.tweedr.makePost(dataIn, (error, result) => {

      response.redirect('/main');
    });


  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    loadIndex: loadIndex,
    login: login,
    signup: signup,
    signupPost: signupPost,
    loginPost: loginPost,
    loadMain: loadMain,
    logout: logout,
    makePost: makePost
  };

}
