module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let tweets = (request, response) => {
        let tweet = request.body.tweet;
        console.log (tweet);
        /*db.tweets.getAll(request, (error, allTweets) => {
            let data = { request, allTweets }
            response.render('tweets', data);
        })*/
    };



/**
 * ===========================================
 * Export controller functions as a module
 * ===========================================
 */
return {
     tweets
};

};