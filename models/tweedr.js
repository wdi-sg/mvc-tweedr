/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope


    let getAllTweets = (callback) => {
        let query = 'SELECT tweets.id,name,content FROM users INNER JOIN tweets on (user_id = users.id)';
        dbPoolInstance.query(query, (error, queryResult) => {
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
    };
    let postNewTweet = (request, callback) => {
        let values = request;
        let query = "INSERT INTO tweets (content, user_id) VALUES ($1, $2) returning *";
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
    return {
        getAllTweets,
        postNewTweet,
        deleteTweet
    };
};