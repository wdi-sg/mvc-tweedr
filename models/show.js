/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let show = (data, callback) => {

    let query = `SELECT * FROM tweeds INNER JOIN users ON users.id = tweeds.user_id WHERE tweeds.user_id=${data.user_id} ORDER BY tweeds.id DESC`;

    dbPoolInstance.query(query, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

            let queryTwo = `SELECT * FROM users WHERE id=${data.user_id}`;
            console.log(queryTwo);

            dbPoolInstance.query(queryTwo, (error, queryResultTwo) => {
                if (error) {
                    callback(error, null);
                } else {
                    callback({tweeds: queryResult.rows, user: queryResultTwo.rows});
                    // console.log(queryResultTwo.rows);

                }


            })




      }
    });


  };

  return {
    show,
  };
};