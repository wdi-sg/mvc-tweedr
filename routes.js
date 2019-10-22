module.exports = (app, allModels) => {

  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *   ╔╦╗┬ ┬┌─┐┌─┐┌┬┐┬─┐  ╦═╗┌─┐┬ ┬┌┬┐┌─┐┌─┐
   *    ║ │││├┤ ├┤  ││├┬┘  ╠╦╝│ ││ │ │ ├┤ └─┐
   *    ╩ └┴┘└─┘└─┘─┴┘┴└─  ╩╚═└─┘└─┘ ┴ └─┘└─┘
   *  =========================================
   *  =========================================
   *  =========================================
   */

// require users controller
    const usersController = require('./controllers/users')(allModels);
// require tweets controller
    const tweetsController = require('./controllers/tweets')(allModels);
// require follows controller
    const followsController = require('./controllers/follows')(allModels);
/*
╔╦╗┬ ┬┌─┐┌─┐┌┬┐┌─┐
 ║ │││├┤ ├┤  │ └─┐
 ╩ └┴┘└─┘└─┘ ┴ └─┘
*/
// get following tweets
    app.get('/', tweetsController.index);
// get form for new tweet
    app.get('/new', tweetsController.new);
// send form of new tweet
    app.post('/new', tweetsController.create);
// get followers tweets
    app.get('/show', tweetsController.show);
/*
╦ ╦┌─┐┌─┐┬─┐┌─┐
║ ║└─┐├┤ ├┬┘└─┐
╚═╝└─┘└─┘┴└─└─┘
*/
// get all users
    app.get('/users', usersController.index);
// get form for new user
    app.get('/users/new', usersController.new);
// send form of new user
    app.post('/users/new', usersController.create);
// get form for login page
    app.get('/users/login', usersController.login);
// send login info and verify
    app.post('/users/login', usersController.check);
// show individual user
    app.get('/users/:id', usersController.show);
/*
╔═╗┌─┐┬  ┬  ┌─┐┬ ┬┌─┐
╠╣ │ ││  │  │ ││││└─┐
╚  └─┘┴─┘┴─┘└─┘└┴┘└─┘
*/
// get all following
    app.get('/following', followsController.index);
// add following
    app.post('/following/:id', followsController.create);
// get all followers
    app.get('/followers', followsController.show);
};