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

        const whenQueryDone = (tweets) => {
            data['tweets'] = tweets;
            // response.render('home', data);
            response.render('home', data);
        }

        let data;

        if (loggedIn === 'true'){
            data = {'loggedIn': loggedIn, 'username': username, 'userID': userID}

            // Get all tweets from database
            db.index.showTweet(userID, whenQueryDone)
        }
        else{
            // Not sure why when i remove this data part the code doesn't work
            // data = {'hello' : 'hello'}

            response.redirect('/login');
        }

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