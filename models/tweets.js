/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope
  
    let getAll = (callback) => {
  
      let query = 'SELECT users.name, tweets.content FROM tweets INNER JOIN users ON tweets.user_id = users.id';
  
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


    let addNew = (user_id, content, callback) => {
  
      let query = `INSERT INTO tweets (content, user_id) VALUES('${content}', '${user_id}') RETURNING *`;
  
      dbPoolInstance.query(query, (error, queryResult) => {
        if( error ){
  
          // invoke callback function with results after query has executed
          callback(error, null);
  
        }else{
  
          // invoke callback function with results after query has executed
  
          if( queryResult.rows.length > 0 ){
            console.log("queryResult.rows!!!!!!\n", queryResult.rows);
            callback(null, queryResult.rows);
  
          }else{
            callback(null, null);
  
          }
        }
      });
    };


    
  
    return {
      getAll,
      addNew
    };
  };
  