const sha256 = require('js-sha256');

module.exports = (dbPoolInstance) => {

    //  home only show the tweets that i follow
    const home = (username, callback) => {
        const tweedsQuery = 'SELECT * FROM tweeds';

        dbPoolInstance.query(tweedsQuery, (err, queryResult) => {
            callback(err, queryResult);
        })
    }  // end of home

    const checkUser = (tweedr, callback) => {
        const checkUserQuery = `SELECT * FROM users WHERE username = '${tweedr.username}'`;

        dbPoolInstance.query(checkUserQuery, (err, queryResult) => {
            callback(err, queryResult);
        })
    }

    const register = (tweedr, callback) => {
        const password = sha256(tweedr.password)

        const addUserQuery = `INSERT INTO users (username, password) VALUES ($1, $2, $3) RETURNING id`;

        const values = [tweedr.username, password, tweedr.profile_pic];

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

        const tweedsQuery = `SELECT tweeds, tweeds.id FROM tweeds INNER JOIN users ON tweeds.users_id = users.id WHERE users.username = '${username}' ORDER BY tweeds.id DESC`;

        dbPoolInstance.query(tweedsQuery, (err, queryResult) => {
            callback(err, queryResult);
        });
    };  // end of myTweeds

    const deleteMyTweeds = (id, callback) => {
        console.log("it goes to model")
        const deleteQuery = `DELETE FROM tweeds WHERE id = '${id}'`;

        dbPoolInstance.query(deleteQuery, (err, queryResult) => {
            callback(err, queryResult);
        })  // end of pool query
    };  // end of delete my tweeds

    const myFollowing = (username, callback) => {
        // const followingQuery = `SELECT followers.followers_users_id,  FROM users INNER JOIN followers ON users.id = followers.users_id WHERE users.username = '${username}'`;

        // get id query from username first
        const getIdQuery = `SELECT id FROM users WHERE users.username = '${username}'`;

        dbPoolInstance.query(getIdQuery, (err, userResult) => {

            const id = userResult.rows[0].id;

            const followingQuery = `SELECT users.id, users.username, users.profile_pic
            FROM users INNER JOIN followers
            ON followers.users_id = users.id
            WHERE followers.followers_users_id = ${id}`

            dbPoolInstance.query(followingQuery, (err, followingResult) => {
                callback(err, followingResult);
            })
        })
    };  // end of my following

    const myFollowers = (username, callback) => {
        // const followingQuery = `SELECT followers.followers_users_id,  FROM users INNER JOIN followers ON users.id = followers.users_id WHERE users.username = '${username}'`;

        // get id query from username first
        const getIdQuery = `SELECT id FROM users WHERE users.username = '${username}'`;

        dbPoolInstance.query(getIdQuery, (err, userResult) => {

            const id = userResult.rows[0].id;

            const followersQuery = `SELECT followers.followers_users_id, users.id, users.username, users.profile_pic
            FROM users INNER JOIN followers
            ON followers.followers_users_id = users.id
            WHERE followers.users_id = ${id}`

            dbPoolInstance.query(followersQuery, (err, followersResults) => {
                callback(err, followersResults);
            })
        })
    };  // end of my followers


    //  db pool instance is accessible within this function scope
    return {
        home: home,
        register: register,
        checkUser: checkUser,
        login: login,
        tweed: tweed,
        myTweeds: myTweeds,
        deleteMyTweeds: deleteMyTweeds,
        myFollowing: myFollowing,
        myFollowers: myFollowers


    }  // end of return
};  // end of db pool instance