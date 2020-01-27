/**
 * ===========================================
 * Modules required
 * ===========================================
 */
const moment = require('moment');


/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // verify if user is signed in, if so, perform the callback.
    const postMessage = (message, userID, callbackFunction) => {
        const queryString = 'INSERT INTO tweets (message, user_id) VALUES ($1, $2) RETURNING *;';
        const queryValues = [message, userID]
        dbPoolInstance.query(queryString, queryValues, callbackFunction);
    };

    // Update message in database
    const editMessage = (message, userID, messageID, callbackFunction) => {
        const queryString = 'UPDATE tweets SET message = $1 WHERE id = $3 AND user_id = $2 RETURNING *;';
        const queryValues = [message, userID, messageID];
        dbPoolInstance.query(queryString, queryValues, (err, queryResult) => {
            if (err) {
                // invoke callback function with results after query has executed
                callbackFunction(err, null);
            } else {
                // invoke callback function with results after query has executed
                if (queryResult.rows.length > 0) {
                    callbackFunction(null, queryResult.rows);
                } else {
                    callbackFunction(null, null);
                }
            }
        })
    }

    // return all messages in the database
    const selectAllMessages = callback => {

        // Select message details from tweets, join the user name, order by newest first.
        let query = 'SELECT tweets.message, users.username, tweets.user_id, tweets.id, tweets.date_created FROM tweets INNER JOIN users ON tweets.user_id = users.id ORDER BY tweets.date_created DESC;';

        dbPoolInstance.query(query, (error, queryResult) => {
            if (error) {
                // invoke callback function with results after query has executed
                callback(error, null);
            } else {
                // invoke callback function with results after query has executed
                if (queryResult.rows.length > 0) {
                    for (const message of queryResult.rows) {
                      message.date_formatted = moment(message.date_created).fromNow();
                    }
                    callback(null, queryResult.rows);

                } else {
                    callback(null, null);

                }
            }
        });
    }


    // Return one specific message.
    const selectIndividualMessage = (id, callback) => {
        const messageID = id;
        let query = 'SELECT tweets.message, users.username, tweets.id, tweets.user_id, tweets.date_created FROM tweets INNER JOIN users ON tweets.user_id = users.id;';

        dbPoolInstance.query(query, (error, queryResult) => {
            if (error) {
                // invoke callback function with results after query has executed
                callback(error, null);
            } else {
                // invoke callback function with results after query has executed
                if (queryResult.rows.length > 0) {
                    const messageResult = queryResult.rows.find(message => {
                        return message.id == messageID
                    });
                    messageResult.date_formatted = moment(messageResult.date_created).fromNow();
                    callback(null, messageResult);
                } else {
                    callback(null, null);
                }
            }
        })
    }

    // Delete a specific message.
    const deleteMessage = (id, user_id, callback) => {
        console.log('deleting message');
        const messageID = id;
        const queryString = `DELETE FROM tweets WHERE id = $1;`;
        const queryValues = [messageID];
        dbPoolInstance.query(queryString, queryValues, (error, queryResult) => {
            if (error) {
                // invoke callback function with results after query has executed
                callback(error, null);
            } else {
                // invoke callback function with results after query has executed
                if (queryResult.rows.length > 0) {
                    const messageResult = queryResult.rows.find(message => {
                        return message.id == messageID
                    });
                    callback(null, messageResult);
                } else {
                    callback(null, null);
                }
            }
        })
    }


    return {
        postMessage,
        editMessage,
        selectAllMessages,
        selectIndividualMessage,
        deleteMessage
    };
};
