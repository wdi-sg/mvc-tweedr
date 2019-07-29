/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let getSingle = (callback,id) => {

    let query = 'SELECT * FROM tweets WHERE id=' + parseInt(id);

    dbPoolInstance.query(query, (error, queryResult) => {

        if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);

        }else{
          callback(null, null);

        }
      }
    });
  }

  let getAll = (callback) => {

    let query = 'SELECT * FROM tweets';

    dbPoolInstance.query(query, (error, queryResult) => {

        if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){
          callback(null, queryResult);

        }else{
          callback(null, null);

        }
      }
    });
  }

  let getUsersTweets = (callback,userid) => {

    let query = 'SELECT * FROM tweets INNER JOIN user_followers ON tweets.user_id=user_followers.user_id INNER JOIN users ON tweets.user_id=users.userid WHERE user_followers.follower_id=$1';

    let values = [userid]

    dbPoolInstance.query(query, values, (error, queryResult) => {

        if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){
          callback(null, queryResult);

        }else{
          callback(null, null);

        }
      }
    });
  }





  return {
    getSingle,
    getAll,
    getUsersTweets
  };
};