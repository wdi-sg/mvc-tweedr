module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR POKEMON CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
  const pokemonControllerCallbacks = require('./controllers/pokemon')(allModels);
const homeControllerCallbacks = require('./controllers/home')(allModels);
const loginControllerCallbacks = require('./controllers/login')(allModels);
const registerControllerCallbacks = require('./controllers/register')(allModels);
const userControllerCallbacks = require('./controllers/user')(allModels);
const followControllerCallbacks = require('./controllers/follow')(allModels);
const tweetControllerCallbacks = require('./controllers/tweet')(allModels);
const hashControllerCallbacks = require('./controllers/hash')(allModels);
const favoriteControllerCallbacks = require('./controllers/favorite')(allModels);

    app.get('/', homeControllerCallbacks.index);
    app.get('/login/',loginControllerCallbacks.login);
    app.post('/login/',loginControllerCallbacks.process);
    app.get('/register/', registerControllerCallbacks.register);
    app.post('/register/', registerControllerCallbacks.processRegister);
    app.get('/user/',userControllerCallbacks.userAll);
    app.post('/follow/', followControllerCallbacks.follow);
    app.post('/tweet/', tweetControllerCallbacks.tweetAdd);
    app.get('/tweet/', tweetControllerCallbacks.showAllTweet);
    app.get('/tweet/:id', tweetControllerCallbacks.showOneTweet);
    app.get('/user/:username',userControllerCallbacks.userProfile);
    app.get('/hash/',hashControllerCallbacks.allHash);
    app.get('/hash/:id',hashControllerCallbacks.singleHash);
    app.post('/favorite/', favoriteControllerCallbacks.favorite);
    app.delete('/favorite',favoriteControllerCallbacks.notFavorite);
  //read the file in and write out to it

  //app.get('/pokemons/:id', pokemons.getPokemon);
};