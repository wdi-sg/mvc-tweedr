const sha256 = require('js-sha256');

module.exports = (dbPoolInstance) => {

    const home = (callback) => {
        const tweedsQuery = 'SELECT * FROM tweeds';

        dbPoolInstance.query(tweedsQuery, (err, queryResult) => {
            callback(err, queryResult);
        })
    }  // end of home

    const register = (tweedr, callback) => {
        const password = sha256(tweedr.password)

        const addUserQuery = `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id`;

        const values = [tweedr.username, password];

        dbPoolInstance.query(addUserQuery, values, (err, queryResult) => {
            callback(err, queryResult);
        })
    }  // end of register

    const login = (tweedr, callback) => {
        const password = sha256(tweedr.password)

        const getUserQuery = `SELECT * FROM users WHERE username = '${tweedr.username}' AND password = '${password}'`;

        dbPoolInstance.query(getUserQuery, (err, queryResult) => {
            callback(err, queryResult);
        });
    };  // end of login

    const tweed = (tweedr, callback) => {
       // console.log(tweedr.username);
        // get id from database
        const userQuery = `SELECT * FROM users WHERE username = '${tweedr.username}'`;

        dbPoolInstance.query(userQuery, (err, userResult) => {
            const id = userResult.rows[0].id;

            const insertTweedQuery = `INSERT INTO tweeds (tweeds, users_id) VALUES ($1, $2) RETURNING id`;

            const values = [tweedr.tweed, id];

            dbPoolInstance.query(insertTweedQuery, values, (err, queryResult) => {
                callback(err, queryResult);
            })
        })
    }  // end of tweed

    const myTweeds = (username, callback) => {
        console.log(username)
        const tweedsQuery = `SELECT tweeds FROM tweeds INNER JOIN users ON tweeds.users_id = users.id WHERE users.username = '${username}'`;

        dbPoolInstance.query(tweedsQuery, (err, queryResult) => {
            callback(err, queryResult);
        });
    };  // end of myTweeds

    const myFollowing = (username, callback) => {
        // const followingQuery = `SELECT followers.followers_users_id,  FROM users INNER JOIN followers ON users.id = followers.users_id WHERE users.username = '${username}'`;

        // get id query from username first
        const getIdQuery = `SELECT id FROM users WHERE users.username = '${username}'`;

        dbPoolInstance.query(getIdQuery, (err, userResult) => {

            const id = userResult.rows[0].id;

            const followingQuery = `SELECT users.id, users.username
            FROM users INNER JOIN followers
            ON followers.users_id = users.id
            WHERE followers.followers_users_id = ${id}`

            dbPoolInstance.query(followingQuery, (err, followingResult) => {
                callback(err, followingResult);
            })
        })
    };  // end of my following


    //  db pool instance is accessible within this function scope
    return {
        home: home,
        register: register,
        login: login,
        tweed: tweed,
        myTweeds: myTweeds,
        myFollowing: myFollowing


    }  // end of return
};  // end of db pool instance