/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let login = (data, callback) => {

    let query = `SELECT * FROM users WHERE name='${data.name}'`;

    dbPoolInstance.query(query, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){

            if (queryResult.rows[0].password === data.password) {
                console.log("Password is correct");

                let id = parseInt(queryResult.rows[0].id);
                let queryTwo = `SELECT * FROM tweeds WHERE user_id=${id} ORDER BY id desc`

                dbPoolInstance.query(queryTwo, (error, queryResultTwo) => {

                    if (error) {
                        callback(error, null);
                    } else {
                        callback({user: queryResult.rows, tweeds: queryResultTwo.rows});
                        console.log(queryResultTwo.rows);
                    }
                })

            } else {
                console.log("Password is wrong");
                console.log(data.pasword);
                callback("Password is wrong");
            }


        }else{

            console.log("Username not found");
            callback("Username not found");

        }
      }
    });


  };

  return {
    login,
  };
};