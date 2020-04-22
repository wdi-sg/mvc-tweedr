module.exports = (db) => {
     /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

    let homePageControllerCallback = (request, response) => {
        const loggedIn = request.cookies.loggedIn;
        const userID = request.cookies.userID;
        const username = request.cookies.username;

        let data;

        if (loggedIn === 'true'){
            data = {'loggedIn': loggedIn, 'username': username, 'userID': userID}
        }
        else{
            data = {'loggedIn': loggedIn}
        }

        const whenQueryDone = (tweets) => {
            data['tweets'] = tweets;
            // response.render('home', data);
            response.render('home', data);
        }

        // Get all tweets from database
        db.index.showTweet(userID, whenQueryDone)

    };


    let writeTweet = (request, response) => {
        const userID = request.params.id;
        const tweet = request.body.tweet;

        const whenQueryDone = () => {
            response.redirect('/');
        }

        // Add tweet into database
        db.index.addTweet(tweet, userID, whenQueryDone);
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