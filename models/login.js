/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

 let login = (data, callback) => {

        let query = `SELECT * FROM users WHERE username='${data.username}'`;

        dbPoolInstance.query(query, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                //if there is a result for that username
                if (queryResult.rows.length > 0) {
                    //if the entered p/w is correct
                    if (queryResult.rows[0].password === data.password) {
                        console.log("Correct password entered");

                        let id = parseInt(queryResult.rows[0].id);
                        let queryTwo = `SELECT * FROM tweeds WHERE user_id=${id} ORDER BY id desc`

                        //fetch all the tweeds by that user, send back user and tweeds info
                        dbPoolInstance.query(queryTwo, (error, queryResultTwo) => {
                            if (error) {
                                callback(error, null);
                            } else {
                                callback({
                                    user: queryResult.rows,
                                    tweeds: queryResultTwo.rows
                                });
                                console.log(queryResultTwo.rows);
                            }
                        })
                    //wrong p/w was entered
                    } else {
                        console.log("Incorrect password");
                        callback("Incorrect password");
                    }
                //if there is not result for that username
                } else {
                    console.log("Username does not exist");
                    callback("Username does not exist");
                }
            }
        });
    };

    return {
        login,
    };
};