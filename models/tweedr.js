/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let getAll = (callback) => {

    let query = 'SELECT users.id, users.username, tweet.tweet, tweet.creation_date FROM tweet INNER JOIN USERS ON tweet.user_id=users.id';
    //   console.log(query)
    // let query = 'SELECT * FROM tweet';

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
  };

  let getAllUsers = (callback) => {

    let query = 'SELECT * FROM users';
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
  };


    let checkUsers = (allData, callback) => {

    let query = "SELECT * from users WHERE username='"+allData.username+"'";
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
  };

    let addNewUser = (allData, callback) => {
    let query  = 'INSERT INTO users (username, password, email, description, user_img, creation_date, user_state) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id';
    const values = [allData.username, allData.hashedPassword, allData.email, allData.description, allData.user_img, allData.creation_date, "active"];
    dbPoolInstance.query(query, values, (error, queryResult) => {
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
  };

    let addTweet = (allData, callback) => {
    let query  = 'INSERT INTO tweet (user_id, tweet, creation_date) VALUES ($1, $2, $3) RETURNING id';
    const now = new Date()
    const values = [allData.user_id, allData.tweet, now];
    dbPoolInstance.query(query, values, (error, queryResult) => {
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
  };


  return {
    getAll,
    getAllUsers,
    checkUsers,
    addNewUser,
    addTweet
  };
};
