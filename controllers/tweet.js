const helper = require('../helper');

module.exports = function(db) {

    let homeRequestHandler = async function(request, response) {
        try {
            if (helper.checkCookiesForLogin(request.cookies) === true) {

                let allTweets = await db.tweets.getAllTweets();
                let userTweetCount = await db.tweets.getTweetsCountByUser(request.cookies['username']);

                let data = {
                    'tweets': allTweets,
                    'userTweetCount': userTweetCount,
                    'userProfile': {
                        'username': request.cookies['username'],
                        'img_url': request.cookies['img_url']
                    }
                }

                response.render('home', data);
            } else {
                response.render('user/login');
            }
        } catch(e) {
            console.log('tweet controller ' + e);
        }
    };

    let addNewTweetRequestHandler = async function(request, response) {
        try {
            if (helper.checkCookiesForLogin(request.cookies) === true) {
                await db.tweets.addNewTweet(request.cookies['username'], request.body.tweet);

                response.redirect('/');
            } else {
                response.render('user/login');
            }
        } catch(e) {
            console.log('tweet controller ' + e);
        }
    };

    return {
        homeRequestHandler,
        addNewTweetRequestHandler
    };
}