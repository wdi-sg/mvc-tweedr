module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
  
    let indexControllerCallback = (request, response) => {
        db.tweedr.getAll((error, allTweets) => {
          response.render('tweedr/index', { allTweets });
        });
    };
    let tweetCreateControllerCallback = (request, response) => {
      console.log(request.body);
      console.log(request.query);
        db.tweedr.makeTweet(request.body, (error, queryResult) => {
          if (error) {
            console.error('error getting tweet:', error);
            response.sendStatus(500);
          }
          if (queryResult.rowCount >= 1) {
            console.log('Tweet created successfully');
          } else {
            console.log('Tweet could not be created');
          }
          response.redirect('/');
        });
    };
  
  
    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
      index: indexControllerCallback,
      tweetCreate: tweetCreateControllerCallback
    };
  
  }
  