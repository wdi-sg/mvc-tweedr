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
  // const pokemonControllerCallbacks = require('./controllers/pokemon')(allModels);


  const tweedRegister = require('./controllers/register.js')(allModels);
  const tweedLogin = require('./controllers/login.js')(allModels);
  const tweedPage = require('./controllers/tweeds.js')(allModels);


//app.get('/', tweed.tweed);
app.get('/', (req, res) => {
    res.render('home');
})
app.get('/login', tweedLogin.displayLogin);
app.get('/register', tweedRegister.register);
app.get('/tweeds', tweedPage.tweedPage);

app.post('/userLogin', tweedLogin.login);
app.post('/registerUser', tweedRegister.registerUser);
app.post('/makeTweed', tweedPage.makeTweed);
app.delete('/logout', (req, res) => {
    res.clearCookie('loggedIn');
    res.clearCookie('user_id');
    res.redirect('/');
})



 // app.get('/pokemons', pokemonControllerCallbacks.index);

};