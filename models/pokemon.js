/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let getAll = (callback) => {

    let query = 'SELECT * FROM pokemons';

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

  let checkLogin = (callback,name,password) => {
    
    let query = "SELECT * FROM users WHERE name='"+name+"'"
    
    dbPoolInstance.query(query, (error, queryResult) => {

      if( error ){
        callback(error, "Error");

      }else{
        
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);

        }else{
          callback(null, "Username not found");
        }
      }
    });
  };

  let userVerification = (callback,id) => {

    console.log('In database query, id is '+id)

    let query = "SELECT * FROM users WHERE id='"+id+"'"

     dbPoolInstance.query(query, (error, queryResult) => {

      if( error ){
        callback(error, "Error");

      }else{
        
        if( queryResult.rows.length > 0 ){

          console.log('Found results')
          callback(null, queryResult.rows);

        }else{
          callback(null, "User not found");
        }
      }
    });
  }

  let insertTweet = (callback,tweet,id) => {

    const values = [tweet,id];
    let query = 'INSERT INTO tweets(tweet,user_id) VALUES ($1,$2) RETURNING *';


    dbPoolInstance.query(query, values, (error, queryResult) => {

      if( error ){
        callback(error, "Error");
      }else{
        if( queryResult.rows.length > 0 ){
          console.log(queryResult.rows)
          callback(null, queryResult.rows);
        }else{
          callback(null, "User not found");
        }
      }
    })
  }

  let showAllTweets = (callback) => {

    let query = `SELECT * FROM tweets INNER JOIN users ON users.id = tweets.user_id`

    dbPoolInstance.query(query,(error,queryResult) => {
      if(error){
        callback(error,"Query error")
      } else {
        if(queryResult.rows.length > 0){
          //Success
          callback(null,queryResult.rows)
        } else {
          callback(null,"No results found")
        }
      }
    })
  }

  let showAllUsers = (callback,id) => {
      //* Template Literals sometimes causes an error.

      let query = `SELECT * FROM users EXCEPT SELECT * FROM users WHERE id=$1`
      const values = [id]

      dbPoolInstance.query(query,values,(error,queryResult) => {
        console.log("showAllUsers queryResult: " + queryResult)

        if (error){
            callback(error, "Query error")
        } else {
          if(queryResult.rows.length > 0 ){
            callback(null,queryResult.rows)
          } else {
            callback(null, "Search yields no result")
          }
        }
      })
  }

  let displayTweetsOfUsersYouAreFollowing = (callback,arrayOfUsersYouAreFollowing) => {

    let query = ''

    for(let i = 0; i <arrayOfUsersYouAreFollowing.length; i++){
      if(i == 0){
        query += 'SELECT * FROM tweets INNER JOIN users ON users.id = tweets.user_id WHERE user_id='+parseInt(arrayOfUsersYouAreFollowing[i])
      } else {
        query += ' OR user_id='+parseInt(arrayOfUsersYouAreFollowing[i])
      }
    }

    console.log(query)
  
    dbPoolInstance.query(query,(error,queryResult) => {
      if(error){
        callback(error,"Query error")
      } else {
        if(queryResult.rows.length > 0){
          // Success
          callback(null,queryResult.rows)
          
        } else {
          callback(null,"No results found")
        }
      }
    })

  }

  return {
    checkLogin: checkLogin,
    userVerification: userVerification,
    insertTweet: insertTweet,
    showAllTweets: showAllTweets,
    showAllUsers: showAllUsers,
    displayTweetsOfUsersYouAreFollowing: displayTweetsOfUsersYouAreFollowing
  };
};
