module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

    let viewAll = (callback) => {

        let query = 'SELECT * FROM tweeds';

        dbPoolInstance.query(query, (err, r) => {
            if( err ){
                callback(error, null);
            } else {
                // invoke callback function with results after query has executed
                if( r.rows.length > 0 ){
                    callback(null, r.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    };

  return {
    allTweeds: viewAll,
    // addTweeds: add,
  };
};