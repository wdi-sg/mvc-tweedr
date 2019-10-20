module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let tweetsControllerCallbacks = (request, response) => {
        db.tweets.getAll((error, allTweets) => {
            response.render('tweets/index', {
                allTweets
            });
        });
    };

    let showNewTweetForm = (request, response) => {
        let logged_in = request.cookies.loggedIn;
        if (logged_in) {
            response.render('tweets/new')
        } else {
            response.render('users/login');
        }
    };

    let postNewTweet = (request, response) => {

        let user_id = request.cookies.loggedIn;
        let newTweet = request.body;
        let tweetInfo = [user_id, newTweet.content];

        console.log("user id", user_id)
        console.log(newTweet)
        console.log("tweet info", tweetInfo)

        db.tweets.addNew(tweetInfo, (error, postTweet) => {
            console.log(postTweet);
            response.send('added new tweet');
        })


    }



    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        index: tweetsControllerCallbacks,
        new: showNewTweetForm,
        postNew: postNewTweet,
    };

}