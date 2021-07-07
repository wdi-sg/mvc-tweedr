/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

    let getAll = (callback) => {
        let query = 'SELECT users.name,tweets.content FROM tweets INNER JOIN users ON (tweets.user_id = users.id)';
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

    let registerUser = (data, callback) => {
        console.log(data);
        let query = 'INSERT INTO users (name, password) VALUES ($1, $2)';
        const values = [data.name, data.password];
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if( error ){

                callback(error, null);

            }else{
                if( queryResult.rows.length > 0 ){
                    console.log("YAY");
                    console.log(queryResult.rows[0] );
                    callback(null, queryResult.rows);
                }else{
                    callback(null, null);
                }
            }
        });
    };

    let logincheck = (data, callback) => {
        // hash the password
        //let hashedPassword = sha256( request.body.password + SALT );
        console.log(data);

        const query = "SELECT FROM users WHERE name=$1 AND password=$2";

        const values = [data.name, data.password];

        dbPoolInstance.query(query, values, (error, queryResult) => {
            if (err) {
                console.log("query error", err.message);

            } else {
                if (res.rows[0] === undefined){
                    response.send("Sorry, the user name/password was incorrect.");
                } else {
                    console.log("YAY");
                    console.log(res.rows[0] );

                    //let hashedLogin = sha256("you are in" + res.rows[0].id + SALT);
                    // check to see if err is null

                }

            }
        });
    };

    let userpage = (inputId, callback) => {
        // hash the password
        //let hashedPassword = sha256( request.body.password + SALT );
        console.log("inputId: " + inputId);
        console.log(typeof inputId);

        const queryString = "SELECT * FROM users WHERE id=($1)";

        const values = [inputId];

        dbPoolInstance.query(queryString, values, (error, queryResult) => {
            if (error) {
                callback(error, null);

            } else {
                if (queryResult.rows[0] === undefined){
                    //response.send("Sorry, the user name/password was incorrect.");
                    callback(null, null);
                } else {
                    console.log("YAY");
                    console.log(queryResult.rows[0] );
                    callback(null, queryResult.rows);

                    //let hashedLogin = sha256("you are in" + res.rows[0].id + SALT);
                    // check to see if err is null

                }

            }
        });
    };

    let createtweet = (data, callback) => {
        // hash the password
        //let hashedPassword = sha256( request.body.password + SALT );
        console.log(data);

        const queryString = "INSERT INTO tweets (user_id, content) VALUES ($1, $2)";

        const values = [data.user_id, data.content];

        dbPoolInstance.query(queryString, values, (err, res) => {
            if (err) {
                console.log("query error", err.message);

            } else {
                if (res.rows[0] === undefined){
                    response.send("Sorry, something went wrong");
                } else {
                    console.log("YAY");
                    console.log(res.rows[0] );

                    //let hashedLogin = sha256("you are in" + res.rows[0].id + SALT);
                    // check to see if err is null

                }

            }
        });
    };


  return {
    getAll,
    registerUser,
    userpage,
    logincheck
  };
};