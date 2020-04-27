/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope
  
    let submitFavourite = (request, response, callback) => {
        let queryString = "INSERT INTO favorites (user_id, tweet_id) VALUES ($1, $2)";
        let values = [request.cookies['userid'], request.body.tweetId];
        pool.query(queryString, values, (error, result) => {
          if(error){
            callback(error, null);
          }
        });
      };

      return {
        submitFavourite: submitFavourite
      };
    };
    