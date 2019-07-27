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

  let allTweetsController = (request, response) => {
      db.pokemon.getAllTweets((error, allTweets) => {
        console.log(allTweets)
        response.send(allTweets)
        // response.render('pokemon/index', { allPokemon });
      });
  };

  let registerController = (request, response) => {
      response.render('forms/register');
  };

  let createUserController = (request, response) => {

      db.pokemon.createUser(request.body, (error, userCreated) => {

        response.cookie('username', userCreated[0].username)
        response.cookie('loggedin', true);
        response.cookie('userID', userCreated[0].id)
        response.redirect('/');
      });
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    // index: indexControllerCallback,
    allTweets: allTweetsController,
    register: registerController,
    createUser: createUserController
  };

}