module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let indexControllerCallback = (req, res) => {
        let isLoggedIn = req.cookies.isLoggedIn;

        if (isLoggedIn === "false") {
            return res.redirect(`/login`);
        } else {
            res.redirect(`/tweets`);
        }
    }

    let getTweetsControllerCallback = (req, res) => {


        let isLoggedIn = req.cookies.isLoggedIn

        if (isLoggedIn === 'false' || !isLoggedIn) {
            return res.redirect(`/login`);
        } else {


            let d = new Date();
            let hour = d.getHours();
            let greeting;
            if (hour >= 18) {
                greeting = `Evening`
            } else if (hour => 12) {
                greeting = `Afternoon`
            } else if (hour > 3) {
                greeting = `Morning`
            } else {
                greeting = `Evening`
            }
            let currentUserId = req.cookies.currentUserId;


            db.users.getCurrentUserDetails(currentUserId, (err, result) => {
                const data = {
                    currentUser: result,
                    tweetGreeting: greeting
                }
                const whenModelIsDone = (err, result2) => {
                    if (err) {
                        console.log(`Query error!`, err);
                    } else {
                        data.tweets = result2
                        res.render(`tweets/alltweets`, data);
                    }
                };

                db.tweets.getTweetsFromFollowing(currentUserId, whenModelIsDone);

            });
        }
    }

    let createTweetControllerCallBack = (req, res) => {

        let tweetContent = req.body.tweetbody;
        let currentUser = req.cookies.currentUserId;

        const whenModelIsDone = (err, result) => {

            if (err) {
                console.log(`Query error!`, err)
            } else {
                res.redirect(`/tweets`)
            }

        }
        db.tweets.createTweet(tweetContent, currentUser, whenModelIsDone)

    }


    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        index: indexControllerCallback,
        getTweets: getTweetsControllerCallback,
        createTweet: createTweetControllerCallBack
    };

}