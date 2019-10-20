module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
  
    let tweetsControllerCallbacks = (request, response) => {
          response.render('tweets');
        
    };

    let listAllTweetsControllerCallbacks = (request, response) => {
        console.log("LOGGGINGGGG IN BOBBBYYY!")
        // console.log("this is the request!!!!!" , request.body)
        // response.send(request.body)

        const callback = (error, allTweets) => {
            let data = {
                allTweets: allTweets
            }
            // response.send(allTweets)
            response.render('alltweets', data );
          }

        db.listAllTweets.listTweetsAll(callback);
    };
    
  
    let newTweetsControllerCallbacks = (request, response) => {
        console.log("LOGGGINGGGG IN MEGAN!")
        console.log("this is the request!!!!!" , request.body)
        response.send(request.body)

        const data = [
            request.body.title,
            request.body.content
        ];


        const callback = (error, banana) => {

            response.send("registered new userrrrrrrrr")
            response.render('pokemon/index',  { allPokemon });
          }

        db.newTweets.tweetsAll(data, callback);
    };
  
    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        index: tweetsControllerCallbacks,
        create: newTweetsControllerCallbacks,
        listAll: listAllTweetsControllerCallbacks
    //   login: loginControllerCallbacks,
    //   userinfo: verifyUserControllerCallbacks
    //   index: registerControllerCallback,
    //   registeruser: registerUserControllerCallback
    };
  
  }
  