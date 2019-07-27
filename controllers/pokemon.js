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


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    // index: indexControllerCallback,
    allTweets: allTweetsController
  };

}