/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let favorite = (favoriteInput, callback) => {
    console.log("Beep Beep Beep");
    console.log(favoriteInput[2]);
    //let query = 'INSERT into users (name, password) VALUES ($1, $2)';
    let id ="";
    let tweets_id = parseInt(favoriteInput[0].tweet_id);
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
    console.log(tweets_id);
    let query = 'SELECT * from users WHERE name = ($1)';
    let controlData = [favoriteInput[0].username];
    console.log(controlData);
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
    let tweets_id = parseInt(notFavoriteInput[0].tweet_id);
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

let checkFavorite = (somethingLikeThat, callback) => {
    console.log("fdlnfladsflkadhfladshjfladsjfkladjfljlj");
    console.log(somethingLikeThat);
    let user_id="";
    let query = 'SELECT id from users WHERE name = ($1)';
    let restrictionArray=[somethingLikeThat[0].username]
    dbPoolInstance.query(query, restrictionArray, (Error, Result) => {
                              if( Error ){
                                console.log("Error")
                                console.log(Error);
                                        // invoke callback function with results after query has executed
                                callback(Error, null);

                              }else{

                                              console.log("BOom Boom Boon Boon Chardfhakhfladhfladshflkdashflashdflkahsdlfhlahsfladhsflghklsafh!!!");
                                              //console.log(queryFavoriteResult.rows);
                                    user_id= Result.rows[0].id;

                    let joinQuery = 'SELECT tweets_id from tweets INNER JOIN favorites ON (tweets.id=favorites.tweets_id) WHERE user_id = ($1)';

                    let joinArray=[user_id]
                    dbPoolInstance.query(joinQuery, joinArray, (joinError, joinResult) => {
                              if( joinError ){
                                console.log("Error")
                                console.log(joinError);
                                        // invoke callback function with results after query has executed
                                callback(joinError, null);

                              }else{

                                              console.log("BOom Boom Boon Boon Chardfhakhfladhfladshflkdashflashdflkahsdlfhlahsfladhsflghklsafh!!!");
                                              console.log(joinResult.rows);
                                              //user_id= Result.rows[0].id;

                                              callback(null, joinResult.rows);


                              }
                            });


                              }
                            });
  };

let viewFavorite = (somethingLikeThat, callback) => {
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    console.log(somethingLikeThat);
    let returniningOutput ={};
    let user_id="";
    let query = 'SELECT * from users WHERE name = ($1)';
    let restrictionArray=[somethingLikeThat.username]
    dbPoolInstance.query(query, restrictionArray, (Error, Result) => {
                              if( Error ){
                                console.log("Error")
                                console.log(Error);
                                        // invoke callback function with results after query has executed
                                callback(Error, null);

                              }else{

                                              console.log("BOom Boom Boon Boon Chardfhakhfladhfladshflkdashflashdflkahsdlfhlahsfladhsflghklsafh!!!");
                                              //console.log(queryFavoriteResult.rows);
                                    user_id= Result.rows[0].id;
                                    console.log(Result.rows);
                                    returniningOutput.user= Result.rows;

                    let joinQuery = 'SELECT * from tweets INNER JOIN favorites ON (tweets.id=favorites.tweets_id) WHERE user_id = ($1)';

                    let joinArray=[user_id]
                    dbPoolInstance.query(joinQuery, joinArray, (joinError, joinResult) => {
                              if( joinError ){
                                console.log("Error")
                                console.log(joinError);
                                        // invoke callback function with results after query has executed
                                callback(joinError, null);

                              }else{

                                              console.log("BOom Boom Boon Boon Chardfhakhfladhfladshflkdashflashdflkahsdlfhlahsfladhsflghklsafh!!!");
                                              console.log(joinResult.rows);
                                              //user_id= Result.rows[0].id;
                                              returniningOutput.tweets=joinResult.rows
                                              callback(null, returniningOutput);


                              }
                            });


                              }
                            });
  };

  return {
    favorite:favorite,
    notFavorite:notFavorite,
    checkFavorite:checkFavorite,
    viewFavorite:viewFavorite,
  };
};