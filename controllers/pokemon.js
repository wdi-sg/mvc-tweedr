module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  var sha256 = require('js-sha256');

  let indexControllerCallback = (request,response) => {
    db.pokemon.getAll((error, allPokemon) => {
      response.render('pokemon/index', { allPokemon });
    });
  };

  let displayLogin = (request,response) => {
    //Display login page
    response.render('pokemon/index')
  };

  let submitLogin = (request,response) => {
    //Extract name and password input into a variable

    const name = request.body.name;
    const password = request.body.password;

    const callback = (error,result) => {
      //Check result
      console.log('Pw in database',result[0].password)
      console.log('pw typed',password)

      if(password == result[0].password){
        //Login successful: 
        const id = result[0].id

        //Implement cookies 
        response.cookie('username',name);
        response.cookie('loggedIn',sha256(id.toString()))
        response.cookie('userid',result[0].id)

        //Page response
        response.redirect('/login/' + result[0].id)

      } else {
        //Render to another page   
        response.send('Password no match')
      }
    }

    db.pokemon.checkLogin(callback,name,password)   
  };

  let createTweet = (request,response) => {

    //Demand user's cookies
    let loggedInCookie = request.cookies['loggedIn']
    
    //Use id to authenticate it
    let id = request.params.id
    if(loggedInCookie == sha256(id.toString())) {

      //If cookie has been verified, display createTweet page
      const callback = (err,result) => {
        response.render('pokemon/tweet',result[0])
      }

      //DB query command
      db.pokemon.userVerification(callback,id)

    } else {

      //If cookie verification fail, show this
      response.send("You are not supposed to be here.")

    }
  };

  let submitTweet = (request,response) => {
    const tweet = request.body.tweet;
    const id = request.params.id;

    const callback = (err,result) => {
      //Check what you have inserted
      console.log(result[0])
      //Redirect to see all tweets 

      // Redirect to / to see all tweets
      response.send("Okay")

    }
    
    db.pokemon.insertTweet(callback,tweet,id)
  };

  let showAllTweets = (request,response) => {
    const callback = (err,result) => {
      // Render then loop in jsx file
      const data = {
        allTweetsArray: result
      }
      
      response.render('allTweets',data)
    }
    db.pokemon.showAllTweets(callback)
  };

  let showUser = (request,response) => {

    let id = request.params.id;

    const callback = (err,result) => {

      const data = {
        users: result
      }

      response.render('userPage',data)
    }

    db.pokemon.showAllUsers(callback,id)
  };

  let banana = (request,response) => {
    response.send("pass new")
  }
    



  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    displayLogin: displayLogin,
    submitLogin: submitLogin,
    createTweet: createTweet,
    submitTweet: submitTweet,
    showAllTweets: showAllTweets,
    showUser: showUser,
    banana: banana
  };

}
