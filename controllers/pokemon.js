module.exports = (db) => {
  
var sha256 = require('js-sha256');
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

  let displayLogin = (request,response) => {
    response.render('pokemon/index')
  }

  let submitLogin = (request,response) => {
    const name = request.body.name;
    const password = request.body.password;
    const callback = (error,result) => {
      if(password == result[0].password){
        //Login successful: 

        //Implement cookies 
        response.cookie('username',name);
        response.cookie('loggedIn',sha256(password))
        response.cookie('userid',result[0].id)

        response.send('Password match')
      } else {
        //Render to another page   
        response.send('Password no match')
      }
    }

    db.pokemon.checkLogin(callback,name,password)
    
  }


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    displayLogin: displayLogin,
    submitLogin: submitLogin
  };

}
