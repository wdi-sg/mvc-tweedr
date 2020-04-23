module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let index = (request, response) => {
    db.tweedr.getAll((error, allTweeds) => {
      if (request.cookies && request.cookies.loggedIn === 'true') {
        response.render('tweedr/index', {'allTweeds': allTweeds, 'loggedIn': 'true'});
      } else {
        response.cookie('loggedIn', 'false');
        response.render('tweedr/index', {'allTweeds': allTweeds, 'loggedIn': 'false'});
      }
    });
  };

  let newForm = (request, response) => {
    response.render('tweedr/new');
  };

  let newTweed = (request, response) => {
    const user_id = request.cookies.user_id;
    const username = request.cookies.username;
    const content = request.body.content;

    db.tweedr.newTweed({user_id, username, content}, (error, result) => {
      response.redirect(302, '/');
    })
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: index,
    new: newForm,
    newTweed: newTweed
  };

}
