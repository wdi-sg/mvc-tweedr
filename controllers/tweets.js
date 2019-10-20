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
      //db.tweets.userCreation((error, createUser) => {
        response.render('tweets/createUser');
      //});
  };

  ///////SUBMITS REGISTRATION FORM AND ADD TO USER DB//////
  let addUser = (request, response) => {
    let newUser = request.body;

    db.tweets.addNewUser(newUser, (error, result) => {
      if (error){
        console.error('error getting user', error);
        respond.send('error getting user');
      } else {
          console.log('result from controller:', result);
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
  };

}