module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let loginControllerCallback = (request, response) => {
      response.render('login')
  };

  let verifyControllerCallback = (request,response)=>{
    let user = request.body.username
    let password = request.body.password
    // let hashedPw = sha256(request.body.password)
    console.log(user, password)

    db.pokemon.verifyUser(user,(foundUser)=>{
        if (foundUser === null){
            response.send('No such person')
        } else {

            if (foundUser.username === user && foundUser.password === password){
                response.cookie('loggedin', 'yay');
                response.cookie('userid',foundUser.id);
                response.cookie('username', foundUser.username);
                response.send('Logged in!')
            } else {
                response.send('Login failed. Try again.')
            }

        }
    });
  }

    let tweedControllerCallback = (request,response)=>{

        //put in a cookie to allow username to display on tweet page

        response.render('tweed')
    }

  let tweedOutControllerCallback = (request,response)=>{
    let tweed = request.body.tweed
    let userId = request.cookies.userid

    console.log(tweed, userId)

    db.pokemon.sendTweed(tweed, userId,(tweeded)=>{
       console.log(tweeded)

       response.send('Wow, look at your tweed: ' + tweeded.tweet)
    });
  }


   let indexControllerCallback = (request, response) => {

      db.pokemon.getAll((error, allTweets) => {
        // response.render('pokemon/index', { allPokemon });
        console.log(allTweets)

        const data = {
            tweets: allTweets
        }

        response.render('index', data)
      });


  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    login: loginControllerCallback,
    verify: verifyControllerCallback,
    tweed: tweedControllerCallback,
    tweedOut: tweedOutControllerCallback
  };

}