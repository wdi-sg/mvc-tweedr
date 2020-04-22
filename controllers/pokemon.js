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
      }else {
        let data = {
          "tweets": result.rows
        }
        response.render('/', data);
      }
    });
  }

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
    viewLogin: viewLoginControllerCallback
  };

}