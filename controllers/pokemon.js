module.exports = (db) => {

  const sha256 = require('js-sha256');
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexControllerCallback = (request, response) => {
      db.pokemon.getAll((error, allPokemon) => {
        response.render('pokemon/index', { allPokemon });
      });
  };

  /////////////////////
  ////   MAIN    /////
  ///////////////////
  let mainControllerCallback = (request, response) => {
    response.render('main');
  }

  ////////////////////
  ////   LOGIN   ////
  //////////////////
  let loginControllerCallback = (request, response) => {
    response.render('login')
  }

  let loginCheckControllerCallback = (request, response) => {
     const userDetails = request.body;
     const hash = sha256(userDetails.password)

    db.pokemon.getAllUsers((error, allUsers) => {
        let correctUsername = false;
        let correctPassword = false;
        const allUsersDetails = allUsers.forEach(user => {
            if (user.username === userDetails.username) {
                correctUsername = true;
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
                username: userDetails.username
            }
            response.cookie('username', userDetails.username)
            response.render('home', data);
        } else {
            response.send('Incorrect username/ password.');
        }
    })
  }

  ////////////////////
  ////   TWEET   ////
  //////////////////
  let tweetControllerCallback = (request, response) => {
        const tweet = request.body.tweet;

        db.pokemon.insertTweet((err, tweet) => {
            response.render(request.body)
        })
  }

  /////////////////////////
  ////   All TWEETS   ////
  ///////////////////////
  let allTweetsControllerCallback = (request, response) => {
    db.pokemon.getAllTweets((err, allTweets) => {
        const data = {
            allTweets: allTweets,
        }
    response.render('all_tweets', data)
    })
  }

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    main: mainControllerCallback,
    login: loginControllerCallback,
    loginCheck: loginCheckControllerCallback,
    tweet: tweetControllerCallback,
    allTweets: allTweetsControllerCallback
  };

}