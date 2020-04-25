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
                        resolve();
                    })
                    .catch(err => {
                        console.error(err.stack)
                    })
            })

            Promise.all([promise1, promise2]).then(() => {
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

        // Add tweet into database
        db.index.addTweet(tweet, userID)
            .then(results => {
                response.redirect('/')
            })
    }

   /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */

   return{
    index: homePageControllerCallback,
    tweet: writeTweet,
    profilePic: addProfilePic,
    favourite: favTweet,
    unfavourite: unFavTweet
   }
}