module.exports = (app, allModels) => {

  // require the controller
  const tweedrControllerCallbacks = require('./controllers/tweedr')(allModels);

  //list of all tweets - if logged in only show tweets of followed.
  app.get('/', tweedrControllerCallbacks.index)

  //login page
  app.get('/login', tweedrControllerCallbacks.renderLogin)

  //validate login, redirect to feed
  app.post('/login', tweedrControllerCallbacks.setLoginCookie)

  //List of all users
  app.get('/users/', tweedrControllerCallbacks.allUsers)

  //form for new user
  app.get('/users/new', tweedrControllerCallbacks.newUserForm)

  //query for new user
  app.post('/users/new/', tweedrControllerCallbacks.newUser)


  //user profile page with username and user tweets - if logged in, get edit/delete tweets
  app.get('/:username', tweedrControllerCallbacks.userProfile)

  //edit user form - only if logged in
  app.get('/:username/edit-user')

  //edit user query - only if logged in
  app.put('/:username/edit-user/')

  //delete user query - only if logged in
  app.delete('/:username/delete-user')

  //page with all username's followers
  app.get('/:username/followers', tweedrControllerCallbacks.renderFollowers)

  //page with the people username is following
  app.get('/:username/following')

  //user feed of all tweets of people who follow them -  only if logged in
  app.get('/followers/feed')

  //user clicks on a button to follow another user -  only if logged in
  app.post('/follow')

  //delete follow relation -  only if logged in
  app.delete('/unfollow')


  //tweet page.
  app.get('/:username/tweed/:tweedid')

  //user can make a new tweet -  only if logged in
  app.get('/:username/tweed/new', tweedrControllerCallbacks.newTweedRender)

  app.post('/:username/tweed/', tweedrControllerCallbacks.newTweedPost)

  //edit tweet form -  only if logged in and if user id matches tweet id
  app.get('/:username/tweed/:tweedid/edit')

  //edit tweet query - only if logged in
  app.put('/:username/tweed/:tweedid/edit')

  //delete tweet query - only if logged in
  app.delete('/:username/tweed/:tweedid/delete')

  app.post('/logout', tweedrControllerCallbacks.logout)

};