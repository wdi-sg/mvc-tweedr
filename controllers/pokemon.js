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
      }else if(result === null){
        response.render('home');
      }else {
        let data = {
          "tweets": result.rows
        }
        response.render('home', data);
      }
    });
  };

  let loginAccountControllerCallback = (request, response) => {
    db.pokemon.loginAccount(request, response, (error, result) => {
      if(error) {
        console.log('Query error:', error.message);
        response.send("query error");
      }else {
        if(result === null){
          response.redirect('/login');
        }else {
          response.cookie("userid", result.rows[0].id);
          response.redirect('/');
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

  let submitTweetControllerCallback = (request, response) => {
    db.pokemon.submitTweet(request, response, (error, result) => {
      if(error) {
        console.log('Query error: ', error.message);
        response.send("query error");
      }else {
        let data = {
          "tweets": result.rows
        }
        response.render('home', data);
      }
    });
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
    loginAccount: loginAccountControllerCallback,
    submitTweet: submitTweetControllerCallback
  };

}