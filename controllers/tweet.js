module.exports = function(db) {

    let homeRequestHandler = async function(request, response) {
        try {
            let allTweets = await db.tweets.getAllTweets();
            let data = { 'tweets': allTweets}

            response.render('home', data);

        } catch(e) {
            console.log('tweet controller ' + e);
        }
    };

    return {
        homeRequestHandler
    };
}