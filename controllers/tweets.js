const sha256 = require('js-sha256');

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexControllerCallback = (request, response) => {
        var userTableId = request.cookies['userId'];
        db.tweets.getAll(userTableId, (error, allTweets) => {
        response.render('tweets/index', { tweeteds: allTweets });
      });
  };

  let registerControllerCallback = (request, response) => {
    response.render('tweets/register');
      // db.tweets.getAll((error, allTweets) => {
      //   response.render('/tweets/register', { allTweets });
      // });
  };

    let registerFormControllerCallback = (request, response) => {
        let enteredUserId = request.body.userId;
        let enteredPassword = sha256(request.body.password);
        console.log('===============entered user name===============');
        console.log(enteredUserId);
        console.log('===============entered parsed password===============');
        console.log(enteredPassword);
        db.tweets.register(enteredUserId,enteredPassword,(error, registerUser) => {
        response.cookie('loggedin', true)
        response.send('Successfully registered');
        // response.render('/tweets/register', { registerUser });
      });
  };

    let loginPageControllerCallback = (request, response) => {
        response.render('tweets/login')
  };

    let loginControllerCallback = (request, response) => {
        let enteredUserId = request.body.userId;
        let enteredPassword = sha256(request.body.password);
        db.tweets.login(enteredUserId,enteredPassword,(error, userLogin) => {
            console.log('********see here!!! ********')
            console.log(userLogin);
            if(userLogin[0] === enteredPassword){
                response.cookie('loggedin', true)
                response.cookie('userId', userLogin[1])
                response.send('You have successfully Logged in!');
            }else {
                response.send('Please enter an incorrect password and try again');
            }
        // response.render('/tweets/register', { registerUser });
      });
  };

      let newtweetPageControllerCallback = (request, response) => {
        var isLogged = request.cookies['loggedin'];
        if (isLogged === 'true'){
            db.tweets.getHashtags((error, hashTags)=>{
                let hashtagData = {hashTags};
                console.log('*************** hashtag data coming from models*******');
                console.log(hashtagData);
                response.render('tweets/newtweet', hashtagData)
            });

        }else {
            response.redirect('/login');
        }
  };

    let newtweetControllerCallback = (request, response) => {
        let tweetmsg = request.body.tweet;
        let hashSelector = request.body.hashtagName;
        var userTableId = request.cookies['userId'];
        db.tweets.tweet(tweetmsg, userTableId, (error, tweeted) => {
            if (hashSelector === 'none'){
            response.send('You have successfully tweeted!~:' + tweeted.tweet);
            } else {
                let newId = tweeted.id
                db.tweets.addHashtag(newId, hashSelector, (error, addHash)=> {
                    response.send('You have successfully tweeted!~' + tweeted.tweet);
                })

            }

      });
  };

      let newhashPageControllerCallback = (request, response) => {
        var isLogged = request.cookies['loggedin'];
        if (isLogged === 'true'){
                response.render('tweets/addhashtags');
        }else {
            response.redirect('/login');
        }
  };


      let newhashControllerCallback = (request, response) => {
        let enteredHashtag = "#" + request.body.hashtag;
        db.tweets.addNewHashtag(enteredHashtag, (error, hashed) => {
              response.send('You have successfully added in a new hashtag!~:' + hashed[0].hashtag);
        })

      }

    let favPageControllerCallback = (request, response) => {
        var userTableId = request.cookies['userId'];
        db.tweets.favPage(userTableId, (error, allFavTweets) => {
            response.render('tweets/fav', { tweeteds: allFavTweets });
        });
    };

    let favControllerCallback = (request, response) => {
      var userTableId = request.cookies['userId'];
      let tweetToAddToFav = parseInt(request.body.favTweet);
      db.tweets.fav(tweetToAddToFav, userTableId, (error, toFav) => {
            response.send('You have successfully added: ' + toFav[0].id) + 'to favourites';
      })

    }


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    register: registerControllerCallback,
    registerForm: registerFormControllerCallback,
    loginPage: loginPageControllerCallback,
    login: loginControllerCallback,
    newtweetPage: newtweetPageControllerCallback,
    newtweet: newtweetControllerCallback,
    newhashPage: newhashPageControllerCallback,
    newhash: newhashControllerCallback,
    favPage: favPageControllerCallback,
    fav:favControllerCallback,
  };

}

    // app.get('/fav', tweetsControllerCallbacks.favPage);

    // app.post('/fav', tweetsControllerCallbacks.fav);