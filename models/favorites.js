// Export model functions as a module
//const sha256 = require('js-sha256');
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope
console.log("entering model");
const addFavorites = ( user_id, tweet_id, callback) => {
    //console.log(query);
     let query = 'INSERT INTO favorites (user_id,tweet_id) VALUES($1, $2) RETURNING *';
     let values = [user_id,tweet_id];
     //dbPoolInstance.query(query, values, (error, queryResult) => {

       dbPoolInstance.query(query, values, callback);
        console.log(callback);
     //})
   };

   return {
    addFavorites
   };
 };