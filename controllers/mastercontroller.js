const sha256 = require('js-sha256');
const cookieParser = require('cookie-parser');

const SALT =  'random';

module.exports = (db) => {

/**
* ===========================================
* Controller logic
* ===========================================
*/

let tweetForm = (request, response) => {
    let hash = sha256(SALT + request.cookies['name']);
    // Is User logged in?
    if (request.cookies['loggedIn'] === hash) {
        // console.log(`*******************************`);
        // console.log(request.cookies.id);
        // console.log(`*******************************`);
        const data = {id : request.cookies.id};
        // console.log(`*******************************`);
        // console.log(`data: ${data.id}`);
        response.render(`new`, data);
    } else {
        // Not logged in
        response.send(`Please Log In to view this page`);
    }
};

let createTweet = (request, response) => {
    const data = request.body; //{}
    // const string = `INSERT INTO tweets
    // (tweets, user_id)
    // VALUES
    // ('${newTweet.tweets}', '${newTweet[`user_id`]}')
    // RETURNING *`;
    db.users.newTweet(data, (error) => {
        response.send(`Created newTweet`);
    })
};

let registrationForm = (request, response) => {
    response.render('register');
};

let registerUser = (request, response) => {
    let hash = sha256(request.body.password + SALT);
    const values = [request.body.name, hash];
    // console.log(`**********************************`);
    // console.log(`Inside mastercontroller.js..`)
    // console.log(`values: ${values}`);
    // console.log(`**********************************`);
    db.users.newUser(values, (error) => {
        response.redirect(`/login`);
    })
};

let loginPage = (request, response) => {
    response.render('login');
}

let userAuthentication = (request, response) => {
    let query = `SELECT * FROM users WHERE name = '${request.body.name}'`;
    let hash = sha256(request.body.password + SALT);
    // console.log(`************************************`);
    // console.log(`Inside mastercontroller.js`)
    // console.log(query, hash);
    // console.log(`************************************`);
    db.users.idAndPasswordCheck(query, hash, (error, user) => {
        // if user submits correct password..
        if (user !== null) {
            let hash = sha256(SALT + user.name);
            response.cookie('name', user.name);
            response.cookie('loggedIn', hash);
            response.cookie('id', user.id);
            response.redirect(`/`);
        } else {
            response.status(403).send(`Wrong Username or Password!`);
        }
    });
}


/**
* ===========================================
* Export controller functions as a module
* ===========================================
*/
return {
    tweetForm : tweetForm,
    createTweet : createTweet,
    registrationForm : registrationForm,
    registerUser : registerUser,
    loginPage : loginPage,
    userAuthentication : userAuthentication
};
}