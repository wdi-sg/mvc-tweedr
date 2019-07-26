/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope

    let getAll = (callback) => {

        let query = 'SELECT users.name,tweets.content FROM users INNER JOIN tweets ON (users.id = tweets.user_id)';

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

    let registerUser = (form, callback) => {
        console.log(form.name);

        let query = `SELECT EXISTS (SELECT * FROM users WHERE name='${form.name}')`;

        dbPoolInstance.query(query, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                console.log(queryResult.rows[0].exists);
                if (queryResult.rows[0].exists) {
                    callback(null, null);
                } else {
                    let query = 'INSERT INTO users (name,password) VALUES ($1,$2) RETURNING *'
                    let arr = [form.name,form.password];

                    dbPoolInstance.query(query, arr,(error, queryResult) => {
                        if (error) {
                            callback(error, null);
                        } else {
                            if (queryResult.rows.length > 0) {
                                callback(null,true);
                            } else {
                                callback(null, null);
                            }
                        }
                    });
                }
            }
        });
    }

    return {
        getAll,
        registerUser
    };
};