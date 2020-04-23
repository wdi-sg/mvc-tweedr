const sha256 = require('sha256');

module.exports = (dbPoolInstance) => {
    let checkUsername = (name, callback) => {
        let query = 'select * from users where name = $1;'
        let value = [name]
        dbPoolInstance.query(query, value, (error, queryResult) => {
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
    }
    let register = (name, password, callback) => {
        checkQueryResult = (error, checkNameResult) => {
            if (checkNameResult) {
                console.log('Username already exists.')
                callback('Username already exists.', null)
                return;
            }
            let query = 'insert into users(name,password) values ($1,$2) returning *';
            values = [name, sha256(password)]
            dbPoolInstance.query(query, values, (error, queryResult) => {
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
        }
        checkUsername(name, checkQueryResult);
    };
    let login = (name, password, callback) => {
        checkQueryResult = (error, checkNameResult) => {
            if (checkNameResult) {
                let query = 'select password from users where password = $1;'
                values = [sha256(password)];
                dbPoolInstance.query(query, values, (error, queryResult) => {
                    if (error) {
                        // invoke callback function with results after query has executed
                        callback(error, null);
                    } else {
                        // invoke callback function with results after query has executed
                        if (queryResult.rows.length > 0) {
                            callback(null, queryResult.rows);
                        } else {
                            callback('Invalid password.', null);
                        }
                    }
                });
            } else {
                Response.send('Invalid username.')
            }
        };
        checkUsername(name, checkQueryResult);
    };
    let home = (callback) => {

        let query = 'select tweets.id,users.name, tweets.content from users inner join tweets on (tweets.user_id = users.id);'
        //let query = 'select * from tweets;'
        dbPoolInstance.query(query, (error, queryResult) => {
            if (error) {
                // invoke callback function with results after query has executed
                callback(error, null);
            } else {
                // invoke callback function with results after query has executed
                if (queryResult.rows.length > 0) {
                    //console.log(queryResult.rows)
                    callback(null, queryResult.rows);

                } else {
                    callback(null, null);

                }
            }
        });
    };
    let newTweet = (content, callback) => {
        let query = 'insert into tweets (content,user_id) values($1,$2) returning content ;'
        values = [content, 1];
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if (error) {
                // invoke callback function with results after query has executed
                callback(error, null);
            } else {
                // invoke callback function with results after query has executed
                if (queryResult.rows.length > 0) {
                    //console.log(queryResult.rows)
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    };
    return {
        register,
        login,
        home,
        newTweet
    };
};