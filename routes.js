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

   // require the tweedr controller

    const tweetControllerCallbacks = require('./controllers/tweet')(allModels);

//user ====================================

    //index path
    app.get('/', tweetControllerCallbacks.home);

    //get register path
    app.get('/register', tweetControllerCallbacks.getRegister);

    //post register path
    app.post('/register', tweetControllerCallbacks.postRegister);



    //get login path
    app.get('/login', tweetControllerCallbacks.getLogin);

    //get login path
    app.post('/login', tweetControllerCallbacks.postLogin);

//tweets ==================================

    //get new tweet
    app.get('/new', tweetControllerCallbacks.getNew);

    //post new tweet
    app.post('/new', tweetControllerCallbacks.postNew);

//=========================================

//All paths will go to controllers/tweet.js

  // require the controller
  const pokemonControllerCallbacks = require('./controllers/pokemon')(allModels);

  app.get('/pokemons', pokemonControllerCallbacks.index);
  //app.get('/pokemons/:id', pokemons.getPokemon);
};