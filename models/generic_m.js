// model module
// contains db queries and returns data to controller
module.exports = (dbPoolInstance) => {

  // generic query function, no params
  const getAll = (callback) => {
    let query = 'SELECT * FROM table';
    dbPoolInstance.query(query, (error, queryResult) => {
      if (error) {
        callback(error, null);
      } else {
        if (queryResult.rows.length > 0) {
          callback(null, queryResult.rows);
        } else {
          callback(null, null);
        }
      }
    });
  };

  // generic query function, with params
  const getSome = (param, callback) => {
    let query = 'SELECT * FROM table';
    let values = [param];
    dbPoolInstance.query(query, values, (error, queryResult) => {
      if (error) {
        callback(error, null);
      } else {
        if (queryResult.rows.length > 0) {
          callback(null, queryResult.rows);
        } else {
          callback(null, null);
        }
      }
    });
  };

  return {
    getAll,
    getSome
  };
};
