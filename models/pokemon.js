/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (pool) => {

  // `dbPoolInstance` is accessible within this function scope

  let getAll = (callback) => {

    let query = 'SELECT * FROM pokemons';

    pool.query(query, (error, queryResult) => {
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

  let registerUser = (data, callback) => {

    let regQuery = 'INSERT INTO users (name,password) VALUES ($1, $2) RETURNING id, name';
    let values = [data.name, data.password];

    pool.query(regQuery, values,(err, res)=>{
        if(err){
            callback(err,null);

        }else {
            callback(null, res)
        }
    })

  };

let loginUser = (data, callback) => {

    let loginQuery = 'SELECT * from users WHERE name = $1';
    let values = [data.name];

    pool.query(loginQuery, values,(err, res)=>{
        if(err){
            callback(err,null);
        }else {
            callback(null, res)
        }
    })
}

let addTweet = (data, callback) => {

    let tweetQuery = 'INSERT INTO tweet (tweet, user_id) VALUES ($1, $2)';

    let values = [data.tweet, data.id];

    pool.query(tweetQuery, values, (err,res)=>{
         if(err){
            callback(err,null);
        }else {
            callback(null, res);
        }
    });
}

let getTweet = (data, callback) => {

    let getTweet = 'SELECT * FROM tweet WHERE user_id = $1';

    let values = [data.id];

    pool.query(getTweet,values, (err,res)=>{
        if (err) {
            callback(err,null);
        }else {
            callback(null, res);
        }
    });
}

let getAllTweet = (callback) => {

    let getAllTweet = 'SELECT * FROM tweet';

    pool.query(getAllTweet,(err,res) => {
        if (err) {
            callback(err,null);
        }else {
            callback(null, res);
        }
    });
}

  return {
    getAll:getAll,
    registerUser:registerUser,
    loginUser:loginUser,
    addTweet:addTweet,
    getTweet:getTweet,
    getAllTweet:getAllTweet
  };
};