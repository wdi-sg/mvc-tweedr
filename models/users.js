module.exports = (dbPool) => {


  // `dbPoolInstance` is accessible within this function scope


    let checkUser = (dataIn, callback)=>{

        let queryExist  = `SELECT * FROM users WHERE username ='${dataIn}'`;

        dbPool.query(queryExist, (err,r)=>{
            if( err ){
                callback(err,null)
            } else {
                if(r.rows.length === 0 ){
                    //user name can use.
                    callback(null, true);
                } else {
                    //user name taken. return null
                    callback(null, false);
                }
            }
        })
    };

    let addNewUser = (dataIn, callback) => {


        // console.log('CONTROL ADD USER');
        // console.log(dataIn);

        let timeCreated = currentDateAndTime();

        let queryInsert = `INSERT INTO users (username,password, profile_desc, profile_pic_url, created_at ) VALUES ( $1, $2, $3, $4, $5) RETURNING *`
        let valuesInsert =[dataIn.username, dataIn.password, dataIn.profile_desc, dataIn.profile_pic_url, timeCreated];

        dbPool.query(queryInsert, valuesInsert, (err, resultInsert) => {
            if( err ){
                callback(err,null)
            } else {
                callback(null,resultInsert);
            }
        });
    }

    let findUser = (dataIn, callback)=>{

        // console.log('SUTTFIN INSIDE');
        // console.log(dataIn);

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
        // console.log('1');
        // console.log(dataIn);
        let query = `SELECT * FROM users WHERE username='${dataIn}'`;

        dbPool.query(query, (err,r)=>{
            // console.log('2')
            // console.log(r);
            if( err ){
                // console.log('3')
                callback(err, null);
            } else {
                if( r.rows[0].password == dataIn.password ){
                    // console.log('3');
                    // console.log(r);
                    callback(null, r);
                } else {

                    //password does not match
                    callback(err, null);
                }
            }
        });
    };

    let viewAllUsersExceptCurrent = (dataIn,callback)=>{

        const query = `SELECT id FROM users WHERE id > 0
                       EXCEPT
                       SELECT id FROM users WHERE id = ${dataIn};`

        dbPool.query(query, (err,r)=>{
            console.log('DONE QUERRRRRYYY USERS');
            console.log(r);
            if( err ){
                callback(err,null);
            } else {
                callback(null,r);
            }
        })
    }




  return {
    add: addNewUser,
    check: checkUser,
    findUser: findUser,
    view: viewSingleUser,
    viewAllExcept : viewAllUsersExceptCurrent,
  };
}


  /**
   * ===========================================
   * Helper Functions
   * ===========================================
   */


var currentDateAndTime = function(){
    let date = new Date();
    let dateAndTime = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ` + `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

    return dateAndTime;
}