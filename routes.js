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
  const userRegistrationControllerCallbacks = require('./controllers/register')(allModels);
  const userLoginControllerCallbacks = require('./controllers/login')(allModels);
  const tweetsControllerCallbacks = require('./controllers/tweets')(allModels);
  const paymentControllerCallbacks = require('./controllers/sendPayment')(allModels);

  app.get('/pokemons', pokemonControllerCallbacks.index);
  app.get('/register', userRegistrationControllerCallbacks.renderRegistrationForm);
  app.post('/register', userRegistrationControllerCallbacks.registerUser);
  app.get('/login', userLoginControllerCallbacks.renderLoginForm);
  app.post('/login', userLoginControllerCallbacks.loginUser);
  app.get('/', tweetsControllerCallbacks.showAllTweets);  
  app.get('/tweets/new', tweetsControllerCallbacks.renderNewTweetForm);  
  app.post('/tweets', tweetsControllerCallbacks.addNewTweet);  
  app.get('/payments/new', paymentControllerCallbacks.renderSendPaymentForm);
  app.post('/payments', paymentControllerCallbacks.sendPayment);
  //app.get('/pokemons/:id', pokemons.getPokemon);
};
