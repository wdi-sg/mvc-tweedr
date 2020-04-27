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
            //Between 6pm to 3:59am
            if (hour >= 18 || hour < 4) {
                greeting = `Good evening`
                //Between 4:00am to 11:59am
            } else if (hour > 4 || hour < 12) {
                greeting = `Good morning`;
                //Between 12pm to 5:59pm
            } else if (hour => 12 || hour < 18) {
                greeting = `Good afternoon`
            }

            let currentUserId = req.cookies.currentUserId;
            db.users.getCurrentUserDetails(currentUserId, (err, userResults) => {
                const data = {
                    currentUser: userResults,
                    tweetGreeting: greeting,
                };

                db.tweets.getTweetsFromFollowing(currentUserId, (err, tweetResults) => {
                    if (err) {
                        console.log(`Query error!`, err);
                    } else {
                        data.tweets = tweetResults;

                        db.hashtags.getAllHashtags((err, hashtagResults) => {
                            err && console.log(`Error in getting all hashtags,`, err);
                            data.hashtags = hashtagResults;
                            res.render(`tweets/alltweets`, data);
                        });
                    }
                });


            });
        }
    }

    let createTweetControllerCallBack = (req, res) => {

        let tweetContent = req.body.tweetbody;
        let currentUser = req.cookies.currentUserId;
        let hashtagInput = req.body.hashtagInput;

        if (hashtagInput === "noHashtag") {
          const whenModelIsDone = (err, result) => {
            err && console.log(`Err at creating tweet`, err);
            res.redirect(`/tweets`);
          };
          return db.tweets.createTweet(
            tweetContent,
            currentUser,
            whenModelIsDone
          );
        };

        db.tweets.createTweet(tweetContent, currentUser, (err, results) => {
            err && console.log(`Err at creating tweet`, err);
            db.hashtags.addHashtagToTweet(hashtagInput, results.tweet_id,
                (err, results) => {
                    return res.redirect(`/tweets`);
                }
            );
        });
    }

    let deleteTweetControllerCallback = (req, res) => {

        let targetId = req.body.tweetId

        const whenModelIsDone = (err, result) => {
            err && console.log(`Error!`, err);
            !err && res.redirect(`/tweets`);
        }

        db.tweets.deleteTweet(targetId, whenModelIsDone)

    };


    let updateTweetControllerCallback = (req, res) => {

        let targetId = req.params.id;
        let content = req.body.tweetBody

        const whenModelIsDone = (err, result) => {
            err && console.log(`Error!`, err);
            !err && res.redirect(`/tweets`);
        };

        db.tweets.updateTweet(targetId, content, whenModelIsDone);

    }

    let getEditTweetFormControllerCallback = (req, res) => {

        let targetId = parseInt(req.params.id);
        let currentUserId = req.cookies.currentUserId

        const whenModelIsDone = (err, result) => {

            const tweetedBy = parseInt(result.tweeted_by)

            if (err) {
                console.log(`Error!`, err);
            } else {
                if (tweetedBy == currentUserId) {
                    res.render(`tweets/edit-tweet`, {
                        tweetData: result,
                    });
                } else {
                    res.render(`error`, {
                        errorMsg: `You are not allowed to edit this tweet.`,
                    });
                }
            }
        }

        db.tweets.getTweet(targetId, whenModelIsDone);

    }


    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        index: indexControllerCallback,
        getTweets: getTweetsControllerCallback,
        createTweet: createTweetControllerCallBack,
        deleteTweet: deleteTweetControllerCallback,
        updateTweet: updateTweetControllerCallback,
        getEditTweetForm: getEditTweetFormControllerCallback,
    };

}