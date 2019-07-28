module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  // let indexControllerCallback = (request, response) => {
  //     db.pokemon.getAll((error, allPokemon) => {
  //       response.render('pokemon/index', { allPokemon });
  //     });
  // };

  let landingPage = (request, response) => {
      response.render('landingPage');
  };

  let allTweetsController = (request, response) => {
      db.pokemon.getAllTweets((error, allTweets) => {
        // response.send(allTweets)
        // response.render('pokemon/index', { allPokemon });
        response.render('home');
      });
  };

  let registerForm = (request, response) => {
      response.render('forms/register');
  };

  let createUserController = (request, response) => {

      db.pokemon.createUser(request.body, (error, userCreated) => {

        response.cookie('userID', userCreated[0].id)
        response.cookie('username', userCreated[0].username)
        response.cookie('loggedin', true);
        response.redirect('/home');
      });
  };

  let loginForm = (request, response) => {
      response.render('forms/login');
  };

  let loginController = (request, response) => {

      db.pokemon.checkUser(request.body, (error, checkResult) => {

        if(request.body.password === checkResult[0].password){

            response.cookie('userID', checkResult[0].id)
            response.cookie('username', checkResult[0].username)
            response.cookie('loggedin', true);
            response.redirect('/home');

        } else{
            console.log("Wrong password!")
            response.status(403);
        }

      });
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    // index: indexControllerCallback,
    landingPage,
    allTweets: allTweetsController,
    registerForm,
    createUser: createUserController,
    loginForm,
    login : loginController
  };

}