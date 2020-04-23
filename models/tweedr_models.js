/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
  // `dbPoolInstance` is accessible within this function scope

// model functions to do SQL queries
  const registerModel = (name, password, callbackFunc) => {
    const query = 'INSERT INTO users (name, password) SELECT $1, $2 WHERE NOT EXISTS (SELECT 1 FROM users WHERE name=$1) RETURNING *;';
    const values = [name, password];

    dbPoolInstance.query(query, values, (err, result) => {
      if (err) {
        callbackFunc(err, null);
      } else {
        if (result.rows.length > 0){
          callbackFunc(null, result.rows);
        } else {
          callbackFunc(null, null);
        }
      }

    })   
  }

  const loginModel = (name, password, callbackFunc) => {
    const query = 'SELECT 1 FROM users WHERE name=$1 AND password=$2;';
    const values = [name, password];

    dbPoolInstance.query(query, values, (err, result) => {
      if (err) {
        callbackFunc(err, null);
      } else {
        if (result.rows.length > 0){
          callbackFunc(null, result.rows);
        } else {
          callbackFunc(null, null);
        }
      }
    })   
  }

  const createTweedModel = (name, content, callbackFunc) => {
    const query = 'INSERT INTO tweeds (content, user_id) SELECT $2, users.id FROM users WHERE users.name =$1 RETURNING content;'
    const values = [name, content];

    dbPoolInstance.query(query, values, (err, result) => {
      if (err) {
        callbackFunc(err, null);
      } else {
        if (result.rows.length > 0){
          callbackFunc(null, result.rows);
        } else {
          callbackFunc(null, null);
        }
      }
    })   
  }

  const getAllTweedModel = (name, callbackFunc) => {
    const query = 'SELECT content FROM tweeds INNER JOIN users ON tweeds.user_id = users.id WHERE users.name = $1;'
    const values = [name];

    dbPoolInstance.query(query, values, (err, result) => {
      if (err) {
        callbackFunc(err, null);
      } else {
        if (result.rows.length > 0){
          callbackFunc(null, result.rows);
        } else {
          callbackFunc(null, null);
        }
      }
    })   
  }


  return {
    register: registerModel,
    login: loginModel,
    createTweed: createTweedModel,
    getAllTweed: getAllTweedModel

  };
};
