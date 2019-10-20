const sha256 = require('js-sha256');
const salt = 'tweedrsalt';



module.exports = (dbPoolInstance) => {
  let tweedCreate = (v1, v2, callback) => {
    const queryArray = [v1.message, v2];
    const queryString = 'INSERT INTO tweeds (message, user_id) VALUES ($1, $2) RETURNING *';

    dbPoolInstance.query(queryString, queryArray, (error, queryResult) => {
      if( error ){
        callback(error, null);
      }else{
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);
        }else{
          callback(null, null);
        }
      }
    });
  };

  let tweedIndex = (values, callback) => {
    const queryArray = [values];
    const queryString = 'SELECT * FROM tweeds WHERE user_id = $1';

    dbPoolInstance.query(queryString, queryArray, (error, queryResult) => {
      if( error ){
        callback(error, null);
      }else{
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);
        }else{
          callback(null, null);
        }
      }
    });
  };

  let tweedShow = (values, callback) => {
    const queryArray = [values];
    const queryString = 'SELECT * FROM tweeds WHERE id = $1';

    dbPoolInstance.query(queryString, queryArray, (error, queryResult) => {
      if( error ){
        callback(error, null);
      }else{
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);
        }else{
          callback(null, null);
        }
      }
    });
  };

  return {
    tweedCreate,
    tweedIndex,
    tweedShow
  };
};
