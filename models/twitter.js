/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
  // `dbPoolInstance` is accessible within this function scope
    var sha256 = require('js-sha256');
    let getAll = (callback) => {

        let query = 'SELECT * FROM pokemons';

        dbPoolInstance.query(query, (error, queryResult) => {
            if( error ){

            // invoke callback function with results after query has executed
            callback(error, null);

            }
            else{

                // invoke callback function with results after query has executed

                if( queryResult.rows.length > 0 ){
                  callback(null, queryResult.rows);

                }
                else{
                    callback(null, null);

                }
            }
        });
    };

    let getOne = (data,callback) => {
        let query = 'SELECT id, name, password FROM users WHERE name=$1 AND password=$2';
        data.password = sha256(data.password);
        let values = [data.name, data.password];
        // console.log(data.name);
        // console.log(data.password);
        // console.log(values);
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if( error ){
            // invoke callback function with results after query has executed
            callback(error, null);
            }
            else{
                // invoke callback function with results after query has executed
                // console.log(data.name);
                // console.log(queryResult.rows[0].name);
                // console.log(data.password);
                // console.log(queryResult.rows[0].password);
                if(queryResult.rows.length > 0){
                    // console.log("Half YESSSSS");
                    if(data.name === queryResult.rows[0].name && data.password === queryResult.rows[0].password){
                        // console.log("YESSSS");
                        callback(null, queryResult.rows[0]);
                    }
                }
                else{
                    console.log("NOOOOOOO");
                    callback(null,null);
                }
            }
        });
    };

    let newOne = (data,callback) => {
        let query = 'SELECT name FROM users WHERE name=$1';
        let values = [data.name]
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if( error ){
            // invoke callback function with results after query has executed
            callback(error, null);
            }
            else{
                // invoke callback function with results after query has executed
                if( queryResult.rows.length > 0 ){
                  callback(null, queryResult.rows);
                }
                else{
                    let newQuery = 'insert into users (name, password, email, photo) values($1, $2, $3, $4)';
                    values.push(sha256(data.password));
                    values.push(data.email);
                    values.push(data.photo)
                    // console.log(values);
                    dbPoolInstance.query(newQuery, values,(error,queryResult)=>{
                        if(error){
                            callback(error,null);
                        }
                        else{
                            // console.log(queryResult);
                            callback(null,null);
                        }
                    });
                }
            }
        });
    };

    let getLoginOne = (data,callback)=>{
        let query = 'select * from users where id=$1';
        let values = [data];
        dbPoolInstance.query(query,values,(error,result)=>{
            if(error){
                callback(error,null);
            }
            else{
                callback(null,result);
            };
        });
    };

    let postTweet = (data,data2,callback)=>{
        let query = 'insert into tweets (tweet, user_id) values($1, $2)';
        let values = [data.tweet,data2];
        dbPoolInstance.query(query,values,(error,result)=>{
            if (error){
                callback(error,null)
            }
            else{
                callback(null,null)
            }
        })
    }

    let getAllTweets = (callback)=>{
        let query = 'select users.id, users.name, users.photo, tweets.id, tweets.tweet from users inner join tweets on (users.id = tweets.user_id) order by tweets.id desc';
        dbPoolInstance.query(query,(error,result)=>{
            if (error){
                callback(error,null);
            }
            else{
                callback(null,result);
            }
        })
    }

  return {
    getAll,
    getOne,
    newOne,
    getLoginOne,
    postTweet,
    getAllTweets
  };
};