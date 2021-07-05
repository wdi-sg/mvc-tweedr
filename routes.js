var multer = require('multer');
var upload = multer({ dest: './uploads/' });

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
    const controllerCallbacks = require('./controllers/tweedr')(allModels);
    const postCallbacks = require('./controllers/post')(allModels);


    app.get('/', controllerCallbacks.redirect);
    app.get('/tweedr', controllerCallbacks.index);
    app.get('/tweedr/login', controllerCallbacks.login);
    app.get('/tweedr/register', controllerCallbacks.register);
    app.post('/tweedr/add_user', postCallbacks.add_user);
    app.post('/tweedr/login_user', postCallbacks.login_user);
    app.get('/tweedr/logout', controllerCallbacks.logout_user);
    app.get('/tweedr/add_tweet', controllerCallbacks.add_tweet);
    app.post('/tweedr/add_tweet_post', postCallbacks.add_tweet_post);
    app.get('/tweedr/follower', controllerCallbacks.follower_list);
    app.get('/tweedr/following', controllerCallbacks.following_list);
    app.get('/tweedr/edit_tweet/:id',controllerCallbacks.edit_tweet);
    app.get('/tweedr/delete_tweet/:id',controllerCallbacks.delete_tweet);
    app.post('/tweedr/edit_tweet',postCallbacks.edit_tweet);
    app.delete('/tweedr/delete_tweet',postCallbacks.delete_tweet);
    app.get('/tweedr/:id', controllerCallbacks.single_user);
    app.get('/tweedr/:id/change_profile_pic',controllerCallbacks.change_profile_pic)
    app.post('/tweedr/:id/change_profile_pic_post',upload.single('myFile'),postCallbacks.change_profile_pic_post)
    app.post('/tweedr/:id/follow', postCallbacks.follow);



    // app.get('/pokemons/:id', pokemons.getPokemon);
};