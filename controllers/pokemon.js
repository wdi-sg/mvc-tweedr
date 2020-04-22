module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexControllerCallback = (request, response) => {
      db.pokemon.getAll((error, allPokemon) => {
        response.render('pokemon/index', { allPokemon });
      });
  };

  let viewRegisterControllerCallback = (request, response) => {
    response.render('register');
  }

  let registerAccountControllerCallback = (request, response) => {
    db.pokemon.registerAccount(request, response, (error, result) => {
      if(error){
        console.log('Query error', error.message);
        response.send("query error");
      }else {
        response.cookie('userid', result.rows[0].id);
        response.redirect('/');
      }
    });
  };

  let viewHomeControllerCallback = (request, response) => {
    db.pokemon.viewHome(request, response, (error, result) => {
      if(error) {
        console.log('Query error', error.message);
        response.send("query error");
      }else{
        response.render('home', result);
      }
    });
  };

  let loginAccountControllerCallback = (request, response) => {
    db.pokemon.loginAccount(request, response, (error, result) => {
      if(error) {
        console.log('Query error:', error.message);
        response.send("query error");
      }else {
        if(result.rows[0].username === request.body.username){
          response.cookie("userid", result.rows[0].id);
          response.redirect('/');
        }else {
          response.redirect('/login');
        }
      }
    });
  };

  let newTweetControllerCallback = (request, response) => {
    response.render('newtweet');
  };

  let viewLoginControllerCallback = (request, response) => {
    response.render('login');
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    viewRegister: viewRegisterControllerCallback,
    registerAccount: registerAccountControllerCallback,
    viewHome: viewHomeControllerCallback,
    newTweet: newTweetControllerCallback,
    viewLogin: viewLoginControllerCallback,
    loginAccount: loginAccountControllerCallback
  };

}