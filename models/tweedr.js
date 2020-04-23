/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope


    let getAllTweets = (callback) => {
        let query = 'SELECT * FROM tweets';
        dbPoolInstance.query(query, (error, queryResult) => {
            if(error){
                callback(error, null);
            }else{
                if( queryResult.rows.length > 0 ){
                    callback(null, queryResult.rows);
                }else{
                    callback(null, null);
                }
            }
        });
    };

    let postRegister = (request, callback) => {

        let registerQuery = "INSERT INTO users (name, password) VALUES ($1, $2) returning *";
        // console.log("MODEL >>>"+username)
        // console.log("MODEL >>>"+hashedpassword)
        let values = request;
        //console.log("request>>>"+request)

        dbPoolInstance.query(registerQuery, values, (error, result)=>{
            if(error){
                callback(error, null);
            }else{
                if( result.rows.length > 0 ){
                    callback(null, result.rows);
                }else{
                    callback(null, null);
                }
            }

        })
    }
    return {
        getAll:getAllTweets,
        postRegister:postRegister
    };
};