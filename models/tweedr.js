/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    let registerUser = (userDetails, callback) => {
        let text = "SELECT name FROM users WHERE name = $1";
        let values = [userDetails.name];

        dbPoolInstance.query(text, values, (error, result) => {

            if( error ){
            callback(error, null);

            } else {
                if (result.rows.length > 0) {
                    callback(null, null);

                } else {
                    let query = "INSERT INTO users (name, password) values ($1, $2) RETURNING *";
                    let values = [userDetails.name, userDetails.password];

                    dbPoolInstance.query(query, values, (error, result) => {
                        if( error ){
                            callback(error, null);

                        } else {
                            callback(null, result);
                        }
                    });
                }
            }
        });
    }

    let loginUser = (userDetails, callback) => {
        let text = "SELECT * from users where name = $1";
        let values = [userDetails.name];

        dbPoolInstance.query(text, values, (error, result) => {

            if( error ){
            callback(error, null);

            } else {
                    if( error ){
                        callback(error, null);

                    } else {
                        callback(null, result);
                }
            }
        });
    }

    let showTweed = (tweed, callback) => {
        let query = "SELECT users.name, tweeds.content, tweeds.id FROM USERS INNER JOIN tweeds ON (users.id = tweeds.user_id) order by id desc";

        dbPoolInstance.query(query, (error, result) => {

            if( error ){
                callback(error, null);

            } else {
                callback(null, result);
             }
        });
    }

    let postTweed = (tweed, cookies, callback) => {
        let text = "INSERT INTO tweeds (content, user_id) VALUES ($1, $2) RETURNING *";
        let values =[tweed.newTweed, cookies.user_id]

        dbPoolInstance.query(text, values, (error, result) => {
            if( error ){
            callback(error, null);

            } else {
                callback(null, result);
            }
        });
    }


  return {
    postTweed,
    showTweed,
    registerUser,
    loginUser,
  };
};