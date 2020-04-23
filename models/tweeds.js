/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

let insertTweed = (tweed, id, callback) => {

    const getQueryUser = "INSERT INTO tweeds(user_name, user_id, tweed) VALUES($1, $2, $3) RETURNING *";

    const values = [tweed.username, id, tweed.tweed];

    dbPoolInstance.query(getQueryUser, values, (error, queryResult) => {
    if(error) {
        console.log("ERRRRROROROROROROR");
        console.log(error);
        callback(error, null);
        return;
    } else {

         if(queryResult.rows.length > 0) {
            console.log("Insert Tweed");
            console.log(queryResult.rows);
            callback(null, queryResult.rows);
        } else {
            console.log("Insert Unsuccessful");
            callback(null, null);
        }
    }
        // invoke callback function with results after query has executed


    });
}


  return {
   insertTweed: insertTweed
  };
}