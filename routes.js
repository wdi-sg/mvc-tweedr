module.exports = (app, allModels) => {

//  ALL ROUTES FOR POKEMON CONTROLLER

  // require the controller
  //const pokemonControllerCallbacks = require('./controllers/pokemon')(allModels);
   const userControl = require('./controllers/users')(allModels);
   const tweetControl = require('./controllers/tweets')(allModels);
   const hashControl = require('./controllers/hashtags')(allModels);

  //app.get('/pokemons',pokemonControllerCallbacks.index);
  // users
   app.get('/register', userControl.registerUser);
   app.post('/register', userControl.registerAccount);
   app.get('/login', userControl.loginPage);
   app.post('/login', userControl.loginUser);
   //app.get('/logout', userControl.logoutUser);

   // tweets
   app.get('/new', tweetControl.newTweets);
   app.post('/new', tweetControl.addTweets);
   app.get('/', tweetControl.allTweets);
  //app.get('/pokemons/:id', pokemons.getPokemon);

  //hashtags
  app.get('/create',hashControl.newHashtags);
  app.post('/create',hashControl.addHashtags);
  app.get('/show', hashControl.allHashtags);
};

/*
app.get('/',(request,response)=>{
    pool.query(query,values(eroor,result)=>{

    })
});*/