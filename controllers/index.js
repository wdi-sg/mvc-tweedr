module.exports = (db) => {
     /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

    let homePageControllerCallback = (request, response) => {
        const loggedIn = request.cookies.loggedIn;

        if (loggedIn === 'true'){
            const username = request.cookies.username;
            const userID = request.cookies.userID;

            const data = {'loggedIn': loggedIn, 'username': username, 'userID': userID}
            response.render('home', data);
        }
        else{
            const data = {'loggedIn': loggedIn}
            response.render('home', data);
        }

    };

    let writeTweet = (request, response) => {
        const userID = request.params.id;
        const tweet = request.body.tweet;

        // Add tweet into database
        db.index.addTweet(tweet, userID);
        response.redirect('/');
    }

   /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */

   return{
    index: homePageControllerCallback,
    tweet: writeTweet
   }
}