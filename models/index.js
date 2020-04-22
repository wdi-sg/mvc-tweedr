/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  const addTweet = (tweet, users_id) => {
    let queryString = "insert into tweets (tweet, users_id) values ($1, $2) returning *";

    const values = [tweet, users_id];

    dbPoolInstance.query(queryString, values, (err, results) => {
      if(err){
        console.log(err);
      }
      else{
        console.log(results.rows)
      }
    })

  }

  return {
    addTweet
  };
};