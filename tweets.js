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
      if (error) {

        // invoke callback function with results after query has executed
        callback(error, null);

      } else {

        // invoke callback function with results after query has executed

        if (queryResult.rows.length > 0) {
          callback(null, queryResult.rows);

        } else {
          callback(null, null);

        }
      }
    });
  };


  let addNew = (user_id, content, callback) => {

    let query = `INSERT INTO tweets (content, user_id) VALUES('${content}', '${user_id}') RETURNING *`;

    dbPoolInstance.query(query, (error, queryResult) => {
      if (error) {

        // invoke callback function with results after query has executed
        callback(error, null);

      } else {

        // invoke callback function with results after query has executed

        if (queryResult.rows.length > 0) {
          console.log("queryResult.rows!!!!!!\n", queryResult.rows);
          callback(null, queryResult.rows);

        } else {
          callback(null, null);

        }
      }
    });
  };
  // this should return the obj//
  let paymentsToRecipient = (callback) => {
    /////////////////////////////Show all payments in table for 4///////////////////////////////////////////////////////////////////////////hardcoded v /////////////
    let query = "SELECT recipient.amount,recipient_id FROM recipient INNER JOIN sender ON recipient.sender_id=sender.user_id WHERE recipient.recipient_id =4 RETURNING *";

    dbPoolInstance.query(query, (error, queryresult) => {
      if (error) {
        console.log(JSON.parse(query));
        // invoke callback function with results after query has executed
        callback(error, null);

      } else {

        // invoke callback function with results after query has executed

        if (queryresult.rows.length > 0) {
          console.log("payment list", queryresult.rows);
          callback(null, queryresult.rows);

        } else {
          callback(null, null);

        }
      }
    });
  };

  let paymentTotalToRecipient = (callback) => {
    /////////////////////////////Show all payments to id 4 in test DB////////////////////////hardcoded v ///////// 1601////
    let query = `"SELECT SUM(recipient.amount) As Total FROM recipient WHERE recipient.recipient_id="+$1 RETURNING *;`

    dbPoolInstance.query(query, (error, queryresult) => {
      if (error) {
        console.log(JSON.parse(query));
        // invoke callback function with results after query has executed
        callback(error, null);

      } else {

        if (queryresult.rows.length > 0) {
          console.log("Total amt!!!!!!", queryresult.rows);
          callback(null, queryresult.rows);

        } else {
          callback(null, null);

        }
      }
    });
  };

///not very clear on the requirements on this function... seems rather similar to the User received payments functions/// could be my misintepretation//
  let createPayment = (value, callback)=> {
    const queryArray = [value.send_id, value.recipient_id];
        let query = `"SELECT recipient.amount,recipient_id FROM recipient INNER JOIN sender ON recipient.sender_id=sender.user_id WHERE recipient.recipient_id ="+$1 RETURNING *`;
    dbPoolInstance.query(query, queryArray, (err, queryResult) => {
      if (err) {
        // invoke callback function with results after query has executed
        callback(err, null);
      } else {
        // invoke callback function with results after query has executed
        if (queryResult.rows.length > 0) {
          callback(null, queryResult.rows);
        }
      }
    });
  };

  return {
    getAll,
    addNew,
    paymentsToRecipient,
    paymentTotalToRecipient,
    createPayment
  };
};
