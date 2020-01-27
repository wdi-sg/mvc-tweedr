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
  const userControllerCallbacks = require('./controllers/users')(allModels);
  const messageControllerCallbacks = require('./controllers/messages')(allModels);

  // Sign in page.
  app.get('/signin', userControllerCallbacks.signInPage);
  app.get('/login', userControllerCallbacks.signInPage);
  // Action of submitting the sign in page
  app.post('/signin', userControllerCallbacks.signIn);

  // Action to check if you're logged in.
  app.get('/check', userControllerCallbacks.checkIfSignedIn);

  // Users REST Routes.
  // Index - list all users.
  // app.get('/users/', userControllerCallbacks.listAllUsers);
  // New - Form to create a new account.
  app.get('/users/new', userControllerCallbacks.registerPage);
  app.get('/register', userControllerCallbacks.registerPage);
  //Create - POST add new user to db then redirect.
  app.post('/register', userControllerCallbacks.registerAccount);
  app.post('/users/', userControllerCallbacks.registerAccount);
  // Show - show one user
  app.get('/users/:id', userControllerCallbacks.viewUserDetails);
  // Edit - edit my user details (none to edit so far?)

  // Update - PUT the Update for the user details (add or remove followers I guess)

  // Destroy - DELETE a specific user account then redirect.

  // Follow - POST that I want to follow a user.
  app.post('/users/:id/follow', userControllerCallbacks.followUser);
  //
  // Messages RESTful Routes.
  // 
  // Index - list all messages
  app.get('/', messageControllerCallbacks.displayAllMessages);
  app.get('/messages/', messageControllerCallbacks.displayAllMessages);
  // New - Form to make new message
  app.get('/messages/new', messageControllerCallbacks.newMessageForm);
  // Create - POST add new to db then redirect
  app.post('/messages/', messageControllerCallbacks.postNewMessage);
  // Show - Show one message
  app.get('/messages/:id', messageControllerCallbacks.displayIndividualMessage);

  // Edit - Edit form for one message
  app.get('/messages/:id/edit', messageControllerCallbacks.editMessageForm);

  // Update - PUT Update a specific message then redirect
  app.put('/messages/:id', messageControllerCallbacks.editMessagePut);

  // Destroy - DELETE a specific message then redirect.
  app.delete('/messages/:id', messageControllerCallbacks.deleteMessage);
};
