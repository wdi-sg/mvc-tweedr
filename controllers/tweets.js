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

    let renderNewTweetForm = (request, response) => {
          response.render('tweets/new');
    };
  
  
    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        showAllTweets: showAllTweets,
        renderNewTweetForm: renderNewTweetForm
    };
  
  }
  