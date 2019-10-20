module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let tweetsControllerCallbacks = (request, response) => {
        db.tweets.getAll((error, allTweets) => {
            response.render('tweets/index', {
                allTweets
            });
        });
    };


    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        index: tweetsControllerCallbacks,
    };

}