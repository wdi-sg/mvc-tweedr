/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let follow = (name, callback) => {
    console.log("Beep Beep Beep");
    console.log(name);
    //let query = 'INSERT into users (name, password) VALUES ($1, $2)';
    let query = 'SELECT * from users WHERE name = ($1)';
    let data = [name.username];

    dbPoolInstance.query(query, data, (error, queryResult) => {
      if( error ){
        console.log("Error")
        console.log(error);
                // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){
                      console.log("BOom Boom Boon Boon");
          let user_id= parseInt(queryResult.rows[0].id);
          let follower_id = parseInt(name.follower_id);
          //let queryInner = 'SELECT * from users_followers';
          let queryInner = 'INSERT into users_followers (user_id, follower_id) VALUES ($1, $2)';
          let innerData =[user_id, follower_id];
          console.log ( innerData);
              dbPoolInstance.query(queryInner, innerData, (error, queryInnerResult) => {
                              if( error ){
                                console.log("Error")
                                console.log(error);
                                        // invoke callback function with results after query has executed
                                callback(error, null);

                              }else{

                                // invoke callback function with results after query has executed

                                if( queryResult.rows.length > 0 ){
                                              console.log("BOom Boom Boon Boon");
                                  console.log(queryInnerResult.rows);
                                  callback(null, queryInnerResult.rows);

                                }else{
                                    console.log("Wrong User Entry")
                                  callback(null, null);

                                }
                              }
                            });

        }else{
            console.log("Wrong User Entry")
          callback(null, null);

        }
      }
    });
  };

  return {
    follow:follow,
  };
};