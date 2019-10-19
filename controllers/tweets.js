module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
  
    let showAllTweets = (request, response) => {
        db.tweets.getAll((error, allTweets) => {
          response.render('tweets/all', { allTweets });
        });
    };
  
  
    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        showAllTweets: showAllTweets
    };
  
  }
  