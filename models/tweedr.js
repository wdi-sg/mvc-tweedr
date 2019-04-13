const sha256 = require('js-sha256');

module.exports = (dbPoolInstance) => {

    let register = (tweedr, callback) => {
        const password = sha256(tweedr.password)

        const addUserQuery = `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id`;

        const values = [tweedr.username, password];

        dbPoolInstance.query(addUserQuery, values, (err, queryResult) => {
            callback(err, queryResult);
        })
    }  // end of register

    let login = (tweedr, callback) => {
        const password = sha256(tweedr.password)

        const getUserQuery = `SELECT * FROM users WHERE username = '${tweedr.username}' AND password = '${password}'`;

        dbPoolInstance.query(getUserQuery, (err, queryResult) => {
            callback(err, queryResult);
        })
    }



    //  db pool instance is accessible within this function scope
    return {
        register: register,
        login: login


    }  // end of return
};  // end of db pool instance