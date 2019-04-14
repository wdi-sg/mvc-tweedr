const helper = require('../helper');

module.exports = function(db) {

    let homeRequestHandler = async function(request, response) {
        try {
            if (helper.checkCookiesForLogin(request.cookies) === true) {
                let allTweets = await db.tweets.getAllTweets();
                let data = { 'tweets': allTweets}

                response.render('home', data);
            } else {
                response.render('user/login');
            }
        } catch(e) {
            console.log('tweet controller ' + e);
        }
    };

    return {
        homeRequestHandler
    };
}