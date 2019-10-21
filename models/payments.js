/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (pool) => {
  // `pool` is accessible within this function scope
  const getAll = (callback) => {
    const query = "SELECT * FROM payments";
    pool.query(query, (error, queryResult) => {
      if ( error ) {
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed
        if ( queryResult.rows.length > 0 ) {
          callback(null, queryResult.rows);
        } else {
          callback(null, null);
        }
      }
    });
  };

  const getUserSentPayments = (data, callback) => {
    const {user_id} = data;
    const query = "SELECT * FROM payments WHERE sender_id = $1";
    const values = [user_id];
    pool.query(query, values, (error, queryResult) => {
      if ( error ) {
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed
        if ( queryResult.rows.length > 0 ) {
          callback(null, queryResult.rows);
        } else {
          callback(null, null);
        }
      }
    });
  };

  const getUserRecievedPayments = (data, callback) => {
    const {user_id} = data;
    const query = "SELECT * FROM payments WHERE recipient_id = $1";
    const values = [user_id];
    pool.query(query, values, (error, queryResult) => {
      if ( error ) {
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed
        if ( queryResult.rows.length > 0 ) {
          callback(null, queryResult.rows);
        } else {
          callback(null, null);
        }
      }
    });
  };

  const getPaymentTotalBySender = (data, callback) => {
    const {user_id} = data;
    const query = "SELECT SUM(amount) FROM payments WHERE sender_id = $1";
    const values = [user_id];
    pool.query(query, values, (error, queryResult) => {
      if ( error ) {
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed
        if ( queryResult.rows.length > 0 ) {
          callback(null, queryResult.rows);
        } else {
          callback(null, null);
        }
      }
    });
  };

  const getPaymentTotalByRecipient = (data, callback) => {
    const {user_id} = data;
    const query = "SELECT SUM(amount) FROM payments WHERE recipient_id = $1";
    const values = [user_id];
    pool.query(query, values, (error, queryResult) => {
      if ( error ) {
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed
        if ( queryResult.rows.length > 0 ) {
          callback(null, queryResult.rows);
        } else {
          callback(null, null);
        }
      }
    });
  };

  return {
    getAll,
    getUserSentPayments,
    getUserRecievedPayments,
    getPaymentTotalBySender,
    getPaymentTotalByRecipient,
  };
};

