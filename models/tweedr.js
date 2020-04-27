/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

    let getAllTweets = (callback) => {
        let query = 'SELECT tweets.id,name,content,user_id FROM users INNER JOIN tweets on (user_id = users.id) ORDER BY id DESC';
        dbPoolInstance.query(query, (error, queryResult) => {
            if(error){
                callback(error, null);
            }else{
                if( queryResult.rows.length > 0 ){
                    console.log("Success in getting all tweets")
                    callback(null, queryResult.rows);
                }else{
                    callback(null, null);
                }
            }
        })
    };
    let postNewTweet = (request, callback) => {
        let values = request;
        let query = "INSERT INTO tweets (content, user_id, hash_id) VALUES ($1, $2, $3) returning *";
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if(error){
                callback(error, null);
            }else{
                if( queryResult.rows.length > 0 ){
                    callback(null, queryResult.rows);
                }else{
                    callback(null, null);
                }
            }
        })
    }
    let deleteTweet = (request,callback) => {
        let values = request;
        console.log(values);
        let query = "DELETE from TWEETS where id = $1";
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if(error){
                callback(error, null);
            }else{
                if( queryResult.rows.length > 0 ){
                    //console.log(queryResult.rows)
                    callback(null, queryResult.rows);
                }else{
                    callback(null, null);
                }
            }
        })
    }

    let userTweets = (request,callback) => {
        let values = request;
        console.log(values);
        let query = 'select tweets.id, content, name, hash_id from tweets INNER JOIN users on (user_id = users.id) where user_id = $1 ORDER BY tweets.id DESC';
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if(error){
                callback(error, null);
            }else{
                if( queryResult.rows.length > 0 ){
                    //console.log(queryResult.rows)
                    callback(null, queryResult.rows);
                }else{
                    callback(null, null);
                }
            }
        })
    }

    return {
        getAllTweets,
        postNewTweet,
        deleteTweet,
        userTweets
    };
};