module.exports = (db) => {
     /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

    let homePageControllerCallback = (request, response) => {
        const loggedIn = request.cookies.loggedIn;
        const userID = request.cookies.userID;
        const username = request.cookies.username;

        const whenQueryDone = (tweets) => {
            data['tweets'] = tweets;
            // response.render('home', data);
            response.render('home', data);
        }

        let data;

        if (loggedIn === 'true'){
            data = {'loggedIn': loggedIn, 'username': username, 'userID': userID}

            // Get all favourite tweets
            let promise1 = new Promise((resolve, reject) => {
                db.index.getFavourites(userID)
                    .then((results) => {
                        const favourites = results.rows
                        data['favourites'] = favourites;
                        resolve();
                    })
                    .catch(err => {
                        console.error(err.stack)
                    })
            })

            // Get all followees tweets from database
            let promise2 = new Promise((resolve, reject) => {
                db.index.showTweet(userID)
                    .then(results => {
                        const tweets = results.rows

                        data['tweets'] = tweets;

                        // get hashtags for each tweet
                        data['hashtags'] = [];

                        tweets.forEach((el, i) => {
                            db.hashtag.getTweetHashtag(el.id)
                                .then((results) => {
                                    data['hashtags'].push(results.rows);
                                    if(i === tweets.length-1){
                                        resolve();
                                    }
                                })
                        })
                    })
                    .catch(err => {
                        console.error(err.stack)
                    })
            })

            // Get all hashtags from database
            let promise3 = new Promise((resolve, reject) => {
                db.hashtag.getHashtags()
                    .then(results => {
                        const hashtags = results.rows;
                        data['hashtags'] = hashtags;
                        resolve();
                    })
                    .catch(err => {
                        console.error(err.stack)
                    })
            })

            Promise.all([promise1, promise2, promise3]).then(() => {
                response.render('home', data);
            })
        }
        else{

            response.redirect('/login');
        }

    };

    let addProfilePic = (request,response) => {
        response.send(request.file);
        console.log(request.body)
    }

    let favTweet = (request, response) => {
        const userID = request.cookies.userID;
        const tweetID = parseInt(request.body.tweetID);

        db.index.favTweet(userID, tweetID)
            .catch(err => {console.error(err.stack)})
    }

    let unFavTweet = (request, response) => {
        const userID = request.cookies.userID;
        // const tweetID = parseInt(request.body.tweetID);
        const tweetID = parseInt(request.params.id)

        // delete favourite relationship from database
        db.index.unFavTweet(userID, tweetID);
    }


    let writeTweet = (request, response) => {
        const userID = request.params.id;
        const tweet = request.body.tweet;
        const hashtagID = request.body.hashtag;
        console.log(request.body);

        if(hashtagID.length > 1){

            // Add tweet into database
            db.index.addTweet(tweet, userID)
                .then(results => {
                    const tweetID = results.rows[0].id;

                    console.log('start linking')

                    //Create a loop to add relationship for tweet to all the hashtags
                    let i = 0;
                    while(i < hashtagID.length){
                        db.hashtag.linkHashtag(hashtagID[i], tweetID)
                            .then((results) => {
                                console.log(results.rows);
                                console.log(i)
                            })
                        i++;
                    }

                    response.redirect('/');

                })
        }else{
            // Add tweet into database
            db.index.addTweet(tweet, userID)
                .then(results => {
                    // response.redirect('/')
                    const tweetID = results.rows[0].id;
                    return db.hashtag.linkHashtag(hashtagID, tweetID)
                })
                .then(results => {
                    response.redirect('/');
                })
        }

    }

   /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */

   return{
    index: homePageControllerCallback,
    writetweet: writeTweet,
    profilePic: addProfilePic,
    favourite: favTweet,
    unfavourite: unFavTweet
   }
}