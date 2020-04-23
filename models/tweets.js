// Export model functions as a module
//const sha256 = require('js-sha256');
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

let addTweets = ( tweet, user_id, callback) => {
     let query = 'INSERT INTO tweets(tweet,user_id) VALUES($1,$2)';
     let values = [tweet,user_id]
     dbPoolInstance.query(query, values, (error, queryResult) => {
         //console.log(query);
       dbPoolInstance.query(query, values, callback);
     });
   };
   return {

     addTweets
   };
 };