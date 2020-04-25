/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    let hashingTweet = (request,callback) => {
        let dataHash;
        let query = "SELECT * from hash";
        dbPoolInstance.query(query, (error, queryResult) => {
            if(error){
                callback(error, null);
            }else{
                if( queryResult.rows.length > 0 ){
                    console.log(queryResult.rows)
                    console.log("before query results")
                    console.log(queryResult.rows[0].content)
                    console.log(queryResult.rows.length)

                    console.log(request)
                    let dupCheck = "no";
                    let id;
                    queryResult.rows.forEach((element, index) => {
                        if(request == element.content) {
                            console.log("SAME LEH");
                            dupCheck = "yes";
                            id = index;
                        } else {
                            console.log("NO SAME VALUES FOUND")
                        }
                    })
                    if (dupCheck == "yes") {
                        callback(null, queryResult.rows[id]);
                        console.log("DUPLICATE FOUND")
                    }
                    if (dupCheck == "no") {
                        console.log("NO DUPLCIATE")
                        let query = "INSERT INTO hash (content) VALUES($1) returning *";
                        let values = request;
                        dbPoolInstance.query(query, values, (error, queryResult) => {
                            if(error){
                                callback(error, null);
                            }else{
                                if( queryResult.rows.length > 0 ){
                                    console.log("INSERT SUCCESSSSSSS")
                                    console.log(queryResult.rows[0])
                                    callback(null, queryResult.rows[0]);
                                }else{
                                    callback(null, null);
                                }
                            }
                        })
                    }

                }else{
                    callback(null, null);
                }
            }
        })
    }

    let postNewTweetHash = (request,callback) => {
        let query = "SELECT id from hash where CONTENT = $1";
        let values = request;
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

    let insertNewHash = (request,callback) => {
        let query = "INSERT INTO hash (content) VALUES($1) returning *";
        let values = request;
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

    return {
        hashingTweet,
        postNewTweetHash,
        insertNewHash
    };
};