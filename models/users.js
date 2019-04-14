module.exports = (dbPool) => {


  // `dbPoolInstance` is accessible within this function scope

    let addNewUser = (dataIn, callback) => {

        let query = `SELECT * FROM users WHERE username='${dataIn.username}'`;
        dbPool.query(query, (err,r)=>{
            // console.log('0000.1');
            // console.log(r);
            // no such user can proceed to create new
           if(r.rows[0] ==  undefined){

                let queryInsert = `INSERT INTO users (username,password) VALUES ( $1, $2 ) RETURNING *`
                let valuesInsert =[dataIn.username, dataIn.password];

                dbPool.query(queryInsert, valuesInsert, (err, resultInsert) => {

                    // console.log(resultInsert);

                    callback(null,resultInsert);
                })

           } else if ( r.rows[0].username == dataIn.username ){ // user already exist.
                callback(null,null);
           }
        })
    };

    let findUser = (dataIn, callback)=>{

        let query = `SELECT * FROM users WHERE username='${dataIn.username}'`;

        dbPool.query( query, (err,r)=>{
            // console.log('FINDDDIDNGGGGG');
            // console.log(r);
            if(err){ // error in query
                callback(err,null);
            } else {
                if(r.rows.length == 0){ //username not found
                    callback(null,null);
                } else {
                    callback(null,r);
                }
            }
        })
    };

    let viewSingleUser = (dataIn,callback)=>{
        console.log('1');
        console.log(dataIn);
        let query = `SELECT * FROM users WHERE username='${dataIn.username}'`;

        dbPool.query(query, (err,r)=>{
            console.log('2')
            console.log(r);
            if( err ){
                // console.log('3')
                callback(err, null);
            } else {
                if( r.rows[0].password == dataIn.password ){
                    console.log('3');
                    // console.log(r);
                    callback(null, r);
                } else {

                    //password does not match
                    callback(err, null);
                }
            }
        });
    };




  return {
    add: addNewUser,
    findUser: findUser,
    view: viewSingleUser,
  };
}