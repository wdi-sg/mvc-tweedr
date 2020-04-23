/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  let checkUserQ = (newUserName, call) => {
    let query = 'SELECT * FROM users WHERE name='+"'"+newUserName+"'";
    dbPoolInstance.query(query, (error, queryResult) => {
      if ( error ) {
        call(error, null);
      } else {
        if( queryResult.rows.length > 0 ){
            call(null, queryResult.rows);
        }else{
            call(null, null);
        };
      };
    });
  };

  let addNewUserQ = (values, call) => {
    let query = "INSERT INTO users (name, password) values ($1, $2)";
    dbPoolInstance.query(query, values, (error, queryResult) => {
      if ( error ) {
        call(error, null);
      } else {
        if( queryResult.rows.length > 0 ){
            call(null, queryResult.rows);
        }else{
            call(null, null);
        };
      };
    });
  };

  let loginCheckQ = (reqUser, call) => {
    let query = "SELECT * from users where name="+"'"+reqUser+"'" ;
    dbPoolInstance.query(query, (error, queryResult) => {
      if ( error ) {
        call(error, null);
      } else {
        if( queryResult.rows.length > 0 ){
            call(null, queryResult.rows);
        }else{
            call(null, null);
        };
      };
    });
  };

  let userIdQ = (username, call) => {
    let query = "SELECT * FROM users WHERE name =" +"'"+username+"'";
    dbPoolInstance.query(query, (error, queryResult) => {
        if ( error ) {
          call(error, null);
        } else {
          if( queryResult.rows.length > 0 ){
              call(null, queryResult.rows);
          }else{
              call(null, null);
          };
        };
    });
  }

  let messageQ = (values, call) => {
    let query = "INSERT INTO tweeds (message, user_id) values ($1, $2);";
    dbPoolInstance.query(query, values, (error, queryResult) => {
        if ( error ) {
          call(error, null);
        } else {
          if( queryResult.rows.length > 0 ){
              call(null, queryResult.rows);
          }else{
              call(null, null);
          };
        };
      });
  };

  let allTweedsQ = (call) => {
    let query = "SELECT * FROM tweeds order by id ASC;";
    dbPoolInstance.query(query, (error, queryResult) => {
        if ( error ) {
          call(error, null);
        } else {
          if( queryResult.rows.length > 0 ){
              call(null, queryResult.rows);
          }else{
              call(null, null);
          };
        };
    });
  }

    return {
        checkUserQ,
        addNewUserQ,
        loginCheckQ,
        allTweedsQ,
        messageQ,
        userIdQ
    };
};
