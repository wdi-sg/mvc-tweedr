module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

    let indexControllerCallback = (request, response) => {
        db.pokemon.getAll((error, allTweets) => {
            console.log(allTweets);
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

    let userpage = (request, response) => {
        let inputId = parseInt(request.params.id);
        console.log(request.params);
        db.pokemon.userpage(inputId, (error, user) => {

            // log them in
            //response.cookie('loggedin', hashedLogin);
            // response.cookie('User', user.name);
            // response.render('pokemon/userpage.jsx', {user});
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
    userpage: userpage,
    createtweet: createtweet
  };

}