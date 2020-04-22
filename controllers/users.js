module.exports = (db) => {

  /**
  * ===========================================
  * Controller logic
  * ===========================================
  */

  let newForm = (request, response) => {
    if (request.cookies.loggedIn === 'true') {
      response.send('you are already logged in');
    } else {
      response.render('users/new');
    }
  };

  let newUser = (request, response) => {
    db.users.newUser(request.body, (error, result) => {
      response.cookie('username', result.username);
      response.cookie('user_id', result.id);
      response.cookie('loggedIn', 'true');
      response.redirect(302, '/');
    });
  };

  let loginPage = (request, response) => {
    response.render('users/login');
  };

  let login = (request, response) => {
    db.users.login(request.body, (error, result) => {
      if (typeof result === 'string') {
        if (result === 'wrong username') {
          response.send('entered wrong username please try again');
        } else if (result === 'wrong password') {
          response.send('entered wrong password please try again');
        }
      } else {
        response.cookie('username', result.username);
        response.cookie('user_id', result.id);
        response.cookie('loggedIn', 'true');
        response.redirect(302, '/');
      }
    });
  };

  let logout = (request, response) => {
    response.clearCookie('username');
    response.clearCookie('user_id');
    response.cookie('loggedIn', 'false');
    response.redirect(302, '/');
  };



  /**
  * ===========================================
  * Export controller functions as a module
  * ===========================================
  */
  return {
    new: newForm,
    newUser: newUser,
    loginPage: loginPage,
    login: login,
    logout: logout
  };

}