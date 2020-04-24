/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let favorite = (favoriteInput, callback) => {
    console.log("Beep Beep Beep");
    console.log(favoriteInput);
    //let query = 'INSERT into users (name, password) VALUES ($1, $2)';
    let id ="";
    let tweets_id = parseInt(favoriteInput[0].favorite_id);
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
    console.log(tweets_id);
    let query = 'SELECT * from users WHERE name = ($1)';
    let controlData = [favoriteInput[0].username];

    dbPoolInstance.query(query, controlData, (error, queryResult) => {
      if( error ){
        console.log("Error")
        console.log(error);
                // invoke callback function with results after query has executed
        callback(error, null);

      }else{

                      console.log("BOom Boom Boon Boon Blatoise!!!");
                      console.log(queryResult.rows);
                      id = queryResult.rows[0].id;
                      console.log("id is "+ id);
                            let favoriteQuery = 'INSERT into favorites (user_id, tweets_id) VALUES($1, $2)';
                            let controlFavoriteData = [id, tweets_id];
                            console.log("BOom Boom Boon Boon Chardfhakhfladhfladshflkdashflashdflkahsdlfhlahsfladhsflghklsafh!!!");
                            console.log(controlFavoriteData);
                            dbPoolInstance.query(favoriteQuery, controlFavoriteData, (favoriteError, queryFavoriteResult) => {
                              if( favoriteError ){
                                console.log("Error")
                                console.log(favoriteError);
                                        // invoke callback function with results after query has executed
                                callback(favoriteError, null);

                              }else{

                                              console.log("BOom Boom Boon Boon Chardfhakhfladhfladshflkdashflashdflkahsdlfhlahsfladhsflghklsafh!!!");
                                              //console.log(queryFavoriteResult.rows);


                                              callback(null, queryFavoriteResult.rows);


                              }
                            });


      }
    });
  };

 let notFavorite = (notFavoriteInput, callback) => {
    console.log("Beep Beep Beep");
    console.log(notFavoriteInput);
    //let query = 'INSERT into users (name, password) VALUES ($1, $2)';
    let id ="";
    let tweets_id = parseInt(notFavoriteInput[0].notfavorite_id);
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
    console.log(tweets_id);
    let query = 'SELECT * from users WHERE name = ($1)';
    let controlData = [notFavoriteInput[0].username];

    dbPoolInstance.query(query, controlData, (error, queryResult) => {
      if( error ){
        console.log("Error")
        console.log(error);
                // invoke callback function with results after query has executed
        callback(error, null);

      }else{

                      console.log("BOom Boom Boon Boon Blatoise!!!");
                      console.log(queryResult.rows);
                      id = queryResult.rows[0].id;
                      console.log("id is "+ id);
                            let favoriteNotQuery = 'DELETE FROM favorites WHERE user_id=($1) AND tweets_id= ($2)';
                            let controlFavoriteNotData = [id, tweets_id];
                            console.log("BOom Boom Boon Boon Chardfhakhfladhfladshflkdashflashdflkahsdlfhlahsfladhsflghklsafh!!!");
                            console.log(controlFavoriteNotData);
                            dbPoolInstance.query(favoriteNotQuery, controlFavoriteNotData, (favoriteNotError, queryFavoriteNotResult) => {
                              if( favoriteNotError ){
                                console.log("Error")
                                console.log(favoriteNotError);
                                        // invoke callback function with results after query has executed
                                callback(favoriteNotError, null);

                              }else{

                                              console.log("BOom Boom Boon Boon Chardfhakhfladhfladshflkdashflashdflkahsdlfhlahsfladhsflghklsafh!!!");
                                              //console.log(queryFavoriteResult.rows);


                                              callback(null, queryFavoriteNotResult.rows);


                              }
                            });


      }
    });
  };
  return {
    favorite:favorite,
    notFavorite:notFavorite,
  };
};