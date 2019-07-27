module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexCC = (request, response) => {
      db.tweedr.getAll((error, tweets) => {
        response.render('tweedr/home', { tweets });
      });
  };

  let loginCC = (request, response) => {
    //pass in request.query data
    db.tweedr.login(request.query, (err, result) => {

        // response.redirect('/');
    })

      // db.tweedr.getAll((error, allTweets) => {
      //   response.render('tweedr/index', { allTweets });
      // });
  };

  let signupCC = (request, response) => {
    db.tweedr.signup(request.query, (err, result) => {
       response.redirect('/');
    })
    // response.redirect('/')
  }

  let getAllTweetsCC = (request, response) => {
    db.tweedr.getAllTweets((err, allTweets) => {
        console.log(allTweets);
        response.render('tweedr/home', { allTweets });
    })
  }






  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexCC,
    login: loginCC,
    signup: signupCC,
    allTweets: getAllTweetsCC
  };

}