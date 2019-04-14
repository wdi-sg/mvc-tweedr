module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

    let viewAll = (callback) => {

        let query = 'SELECT * FROM tweeds ORDER BY id DESC';

        dbPoolInstance.query(query, (err, r) => {
            if( err ){
                callback(err, null);
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

    let addTweeds = (dataIn, callback)=>{


        let queryInsert =  `INSERT INTO tweeds
                            (tweeds, user_id)
                            VALUES
                            ($1, $2)
                            RETURNING *`;

        let values = [ dataIn.twds.tweeds , dataIn.userId ];

        dbPoolInstance.query(queryInsert, values, (err,r) =>{
            console.log('AT QUERY INSIDEEEEEE');
            console.log(r);
            if(err){
                callback(error,null)
            } else {
                callback(null, r.rows);
            }
        })



    }


  return {
    allTweeds: viewAll,
    addTweeds: addTweeds,
    // addTweeds: add,
  };
};