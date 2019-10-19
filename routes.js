module.exports = (app, allModels) => {

  /*
   *  =========================================
   *    ALL ROUTES FOR TWEEDR
   *  =========================================
   */

  // require the controller
  const userController = require('./controllers/user')(allModels);

  app.get('/register', userController.newUser);
  app.post('/register', userController.registerUser);
  //app.get('/pokemons/:id', pokemons.getPokemon);
};