/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  //log in
  let userCheck = (requestUser, call) => {
    let query = "SELECT * from users where name="+"'"+requestUser+"'" ;
    dbPoolInstance.query(query, (error, queryResult) => {
      if ( error ) {
        call(error, null);
      } else {
        if( queryResult.rows.length > 0 ){
            call(null, queryResult.rows);
        }else{
            call(null, null);
        };
      };
    });
  };

//show all tweeds
  let alltweedsCallback = (callback) => {
    let query = "SELECT * from tweeds;";
    dbPoolInstance.query(query, (error, queryResult) => {
      callback(error, queryResult.rows);
      });
    };

//create new tweed
  let createtweedsCallback = (userId, contentInput, callback) => {

    let query = "INSERT INTO tweeds (content, user_id) VALUES ($1, $2) RETURNING *";
     const values = [contentInput, userId];

    dbPoolInstance.query(query, values, (error, queryResult) => {
      callback(error, queryResult.rows[0]);
      });
    };


  return {
    userCheck,
    alltweedsCallback,
    createtweedsCallback,
  };
};
