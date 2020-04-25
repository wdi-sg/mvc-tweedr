module.exports = (db) => {
const sha256 = require('js-sha256');

// ==============================
//       CONTROLLER LOGIC
// ==============================

    // ==== Main Page ====
    let mainController = (request, response) => {
        response.render('main');
    }

    // ==== Login Page ====
    let loginController = (request, response) => {
        response.render('login');
    }

    let verifyLoginController = (request, response) => {
        const userDetails = request.body;
        const hash = sha256(userDetails.password)

        db.model.getAllUsers((error, allUsers) => {
            let correctUsername = false;
            let correctPassword = false;
            let userId;
            const allUsersDetails = allUsers.forEach(user => {
                if (user.username === userDetails.username) {
                    correctUsername = true;
                    userId = user.id;
                    if (user.password === hash) {
                        correctPassword = true;
                    } else {
                        return;
                    }
                } else {
                    return;
                }
            })

            if (correctUsername === true && correctPassword === true) {
                const data = {
                    username: userDetails.username,
                    userId: userId
                }
                response.cookie('username', userDetails.username);
                response.cookie('userId', userId)
                response.render('home', data);
            } else {
                response.send('Incorrect username/ password.');
            }
        })
    }

    // ==== Home Page ====
    let homeController = (request, response) => {
    response.render('home');
    }

    // ==== Make a Tweet ====
    let newTweetController = (request, response) => {
        const data = {
            username: request.cookies['username'],
            userId: request.cookies['userId']
        }
        response.render('new_tweet', data)
    };

    let showTweetController = (request, response) => {
        let tweet = request.body.tweet;
        let userId = request.cookies['userId'];
        let username = request.cookies['username'];

        const whenModelIsDone = (err, result) => {
            if (err) {
                console.log('Query error', err);
            } else {
                const data = {
                    tweet: tweet,
                    username: username,
                    userId: userId
                }
                response.render('show_tweet', data)
            }
        }
        db.model.insertTweet(tweet, userId, whenModelIsDone);
    }

    // ==== List of all Tweets ====
    let allTweetsController = (request, response) => {
    db.model.getAllTweets((err, allTweets) => {
        const data = {
            allTweets: allTweets,
        }
    response.render('all_tweets', data)
    })
    }

    // ==== List of all Users ====
    let allUsersController = (request, response) => {
        db.model.getAllUsers((err, allUsers) => {
            const data = {
                allUsers: allUsers,
                currentUserId: request.cookies['userId']
            }
        response.render('all_users', data)
        })
    }

    // ==== List of user's tweets ====
    let userController = (request, response) => {
        const userId = request.params.id;
        const whenModelIsDone = (err, userTweets) => {
            if (err) {
                console.log('Query error', err);
            } else {
                const data = {
                    userId: request.params.id,
                    userTweets: userTweets
                }
                response.render('user', data)
            }
        }
        db.model.getUserTweets(userId, whenModelIsDone)
    }

    /**
    * ===========================================
    * Export controller functions as a module
    * ===========================================
    */
    return {
    main: mainController,
    login: loginController,
    verifyLogin: verifyLoginController,
    home: homeController,
    newTweet: newTweetController,
    showTweet: showTweetController,
    allTweets: allTweetsController,
    allUsers: allUsersController,
    user: userController
    };

}