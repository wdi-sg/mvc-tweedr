/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let sendTweed = (data, callback) => {

    let query = `INSERT INTO tweeds (content, user_id) VALUES ('${data.content}', '${data.user_id}')`;
    let queryTwo = `SELECT * FROM tweeds WHERE user_id=${data.user_id} ORDER BY id DESC`;


    dbPoolInstance.query(query, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        dbPoolInstance.query(queryTwo, (error, queryResultTwo) => {

            if (error) {
                callback(error, null);
            } else {

                let queryThree = `SELECT * FROM users WHERE id=${data.user_id}`;
                    console.log(queryTwo);

                    dbPoolInstance.query(queryThree, (error, queryResultThree) => {
                        if (error) {
                            callback(error, null);
                        } else {
                            callback({tweeds: queryResultTwo.rows, user: queryResultThree.rows});
                            // console.log(queryResultTwo.rows);

                        }


                    })
            }
        })


      }
    });


  };

  return {
    sendTweed,
  };
};