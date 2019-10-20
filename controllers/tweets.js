module.exports = (db) => {
  const sha256 = require('js-sha256');
  const SALT = "bababanana";

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let getAllTweets = (request, response) => {
        //look for the db table
        //allTweets below refers to the result from the models query
      db.tweets.getAllTweetsData((error, allTweets) => {
        //look inside your views folder to render the jsx file
        response.render('tweets/index', { allTweets });
      });
  };

  ///////SHOWS PAGE TO REGISTER A USER////////
  let createUser = (request, response) => {
    response.render('tweets/createUser');
  };

  ///////SUBMITS REGISTRATION FORM AND ADD TO USER DB//////
  let addUser = (request, response) => {
    let newUser = request.body;

    db.tweets.addNewUser(newUser, (error, result) => {
      if (error){
        console.error('error getting user', error);
        respond.send('error getting user');
      } else {
          //console.log('result from controller:', result);
          let user_id = result[0].id;
          let currentSessionCookie = sha256(user_id + 'logged_id' + SALT);
          response.cookie('user_id', user_id);
          response.cookie('loggedIn', currentSessionCookie);

          let data = {
            "name": result[0].name,
            "username": result[0].username
          };

        response.render('tweets/home', data);
      }
    });
  };

  ///////SHOWS PAGE TO LOG IN////////
  let login = (request, response) => {
    response.render('tweets/login');
  };

  //////VERIFY DATA TO LOG IN//////
  let verifyLogIn = (request, response) => {
    let user = request.body;
    let hashedPassword = sha256(user.password + SALT);
    console.log("hashed entered password: " + hashedPassword);

    db.tweets.userLogIn(user, (error, result) => {
      if (error){
        console.error('error getting user', error);
        respond.send('error getting user');
      } else {
          if (hashedPassword === result[0].password) {
            let user_id = result[0].id;
            let currentSessionCookie = sha256(user_id + 'logged_id' + SALT);
            response.cookie('user_id', user_id);
            response.cookie('loggedIn', currentSessionCookie);

            let data = {
            "name": result[0].name,
            "username": result[0].username
            };

            response.render('tweets/home', data);
          } else {
                response.status(403).send('Oops! Wrong password');
          };
      };
    });
  };

  //////SHOW PAGE TO CREATE A TWEET (USER NEEDS TO BE LOGGED IN)///////
  let createTweet = (request, response) => {
    let user_id = request.cookies.user_id;
    let savedCookie = request.cookies.loggedIn;

    if (savedCookie === undefined) {
        response.send ("You're not logged in!")
    } else {
        db.tweets.getUser(user_id, (error, result) => {
          if (error) {
            console.error('error getting user', error);
            respond.send('error getting user');
          } else {
              let data = {
              "name": result[0].name,
              "username": result[0].username
              };
            response.render('tweets/newtweet', data);
          }
        });
    }
  };

  /////SUBMIT THE NEW TWEET/////
  let addTweet = (request, response) => {
    let newTweet = request.body;
    let cookieStatus = request.cookies;
    console.log('This is the cookieStatus: ', cookieStatus);

    let user_id = request.cookies.user_id;
    let currentSessionCookie = sha256(user_id + 'logged_id' + SALT);

    db.tweets.addTheTweet(newTweet, (error, result) => {
      if (error) {
        console.error('error getting user', error);
        respond.send('error getting user');
      } else {
          if (cookieStatus.loggedIn === currentSessionCookie){
            console.log('this is the new tweet content: ', newTweet);
            response.send(newTweet);
          } else {
            response.send('How did you get here??')
          }
      }
    });
  };





  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
   ///NEED KEYS???//
  return {
    getAllTweets,
    createUser,
    addUser,
    login,
    verifyLogIn,
    createTweet,
    addTweet
  };

}