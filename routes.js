module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR POKEMON CONTROLLER
   *  ===============xw==========================
   *  =========================================
   *  =========================================
   */

    // require the controller
    const tweedr = require('./controllers/tweedr')(allModels);
    const user = require('./controllers/user')(allModels);

    app.get('/', tweedr.index);
    app.post('/tweet/hash',tweedr.selectedHashTweet)
    app.post('/tweet/new',tweedr.postNewTweet)
    app.post('/tweet/delete/:id',tweedr.deleteTweet)
    app.post('/tweet/likes',tweedr.likeTweet)
    app.get('/tweet/user/:id',user.otherUserPage)
    app.get('/tweet/user',user.userPage)
    app.get('/login',user.getLogin)
    app.post('/login',user.postLogin)
    app.get('/register',user.getRegister)
    app.post('/register',user.postRegister)
    app.delete('/logout',user.logout)
};