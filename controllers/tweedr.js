const SALT = "racketofthesaltyrunlamb";
const sha256 = require('js-sha256');

module.exports = (db) => {
  
  let userLogged = false;

const loggedIn = function (request) {
 // see if they are logged in?
  if (sha256(request.cookies['tweedr_user'] + SALT) === request.cookies['tweedr_nr'] ){  
  return true;
  } 
}
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexControllerCallback = (request, response) => {
    loggedIn(request);
    let showUserTweet = null;
      db.tweedr.getAll(showUserTweet, (error, allTweets) => {
        allTweets.pageTitle = "Latest Tweets";
        response.render('tweedr/alltweets', { allTweets });
                // response.send({ allTweets });
      });
  };


  let myindexControllerCallback = (request, response) => {
    let showUserTweet = request.params.id;
      db.tweedr.getAll(showUserTweet, (error, allTweets) => {
        allTweets.pageTitle = showUserTweet +"'s latest tweets";
        console.log({allTweets})
        response.render('tweedr/alltweets', { allTweets });
                // response.send({ allTweets });
      });
  };
    let tweetControllerCallback = (request, response) => {
        data = {};
        // check for user logged in..
        if (loggedIn(request) === true) {
          // console.log ('can tweet')
          response.render('tweedr/tweet');
        } else {
            response.redirect('/login');
            }
  };

    let tweetPostControllerCallback = (request, response) => {
        const allData = request.body;
        data = {};
        // check for user logged in..
        if (loggedIn(request) === true) {
          console.log ('tweet posted', allData)
          // get user ID
          allData.username = request.cookies['tweedr_user'];
          db.tweedr.checkUsers(allData, (error, postRegister) => {
            data.user = postRegister;
            // console.log (data.user[0].id)
            allData.user_id = data.user[0].id;
            // add the tweet to the database
            db.tweedr.addTweet(allData, (error, postRegister) => {
            response.redirect('tweedr');
                });
          });
        } else {
            response.redirect('/login');
            }
  };





  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    mytweet: myindexControllerCallback,
    tweet: tweetControllerCallback,
    tweetPost: tweetPostControllerCallback
  };

}
