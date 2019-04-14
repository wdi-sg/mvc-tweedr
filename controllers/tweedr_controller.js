module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
  
    let indexControllerCallback = (request, response) => {
      let data ={};
      data["userId"] = request.cookies.userId;
      
      db.tweedr.getAll((error, allTweets) => {
          data["allTweets"] = allTweets;
          response.render('tweedr/index', data);
        });
    };
    let tweetCreateControllerCallback = (request, response) => {
      console.log(request.body);
      console.log(request.query);
      console.log(request.cookies.userId);
      
        db.tweedr.makeTweet(request.body, (error, queryResult) => {
          if (error) {
            console.error('error making tweet:', error);
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
  