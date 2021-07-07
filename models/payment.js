const sha256 = require('js-sha256');
const salt = 'tweedrsalt';

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let sendingPayments= (v1, v2, v3, callback) => {
    const queryArray = [v1, v2, v3];
    const queryString = 'INSERT INTO payments (recipient_id, sender_id, amount) VALUES ($1, $2, $3) RETURNING *';

    dbPoolInstance.query(queryString, queryArray, (error, queryResult) => {
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

  let getUserSentPayments= (v1, callback) => {
    const queryArray = [v1];
    const queryString = 'SELECT * FROM payments INNER JOIN users ON (users.id = payments.sender_id) WHERE payments.sender_id = $1';
    dbPoolInstance.query(queryString, queryArray, (error, queryResult) => {
      if( error ){
        // invoke callback function with results after query has executed
        callback(error, null);
      }else{
        // invoke callback function with results after query has executed
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult);
        }else{
          callback(null, null);
        }
      }
    });
  };

  let getUserReceivedPayments = (v1, callback) => {
    const queryArray = [v1];
    const queryString = 'SELECT * FROM payments INNER JOIN users ON (users.id = payments.recipient_id) WHERE payments.recipient_id = $1';

    dbPoolInstance.query(queryString, queryArray, (error, queryResult) => {
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

  let getPaymentTotalBySender = (v1, callback) => {
    const queryArray = [v1];
    const queryString = 'SELECT SUM(payments.amount) FROM payments INNER JOIN users ON (users.id = payments.sender_id) WHERE payments.sender_id = $1';

    dbPoolInstance.query(queryString, queryArray, (error, queryResult) => {
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

  let getPaymentTotalByRecipient = (v1, callback) => {
    const queryArray = [v1];
    const queryString = 'SELECT SUM(payments.amount) FROM payments INNER JOIN users ON (users.id = payments.recipient_id) WHERE payments.recipient_id = $1';

    dbPoolInstance.query(queryString, queryArray, (error, queryResult) => {
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

  return {
    sendingPayments,
    getUserSentPayments,
    getUserReceivedPayments,
    getPaymentTotalBySender,
    getPaymentTotalByRecipient
  };
};
