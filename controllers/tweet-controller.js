module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

    let indexControllerCallback = (request, response) => {
        db.pokemon.getAll((error, allTweets) => {
            response.render('pokemon/index.jsx', { allTweets });
        });
    };

    let register = (request, response) => {
        response.render('pokemon/register.jsx');
    };

    let registerUser = (request, response) => {
        let data = request.body;
        db.pokemon.registerUser(data, (error, registerUser) => {
            //response.cookie('loggedin', hashedLogin);
            response.cookie('User', registerUser.name);
            response.redirect('/');
        });
    };

    let logincheck = (request, response) => {
        let data = request.body;
        db.pokemon.logincheck(data, (error, registerUser) => {

            // log them in
            //response.cookie('loggedin', hashedLogin);
            response.cookie('User', registerUser.name);
            response.redirect('/');
        });
    };

    let createtweet = (request, response) => {
        let data = request.body;
        db.pokemon.createtweet(data, (error, registerUser) => {

            // log them in
            //response.cookie('loggedin', hashedLogin);
            response.cookie('User', registerUser.name);
            response.redirect('/');
        });
    };



  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    register : register,
    registerUser: registerUser,
    logincheck: logincheck,
    createtweet: createtweet
  };

}