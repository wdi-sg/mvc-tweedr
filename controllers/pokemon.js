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
  };

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

        // response.send('hey')
        response.redirect('/login/' + result[0].id)

      } else {
        //Render to another page   
        response.send('Password no match')
      }
    }

    db.pokemon.checkLogin(callback,name,password)   
  }

  let userPage = (request,response) => {
    let id = request.params.id
    
    let loggedInCookie = request.cookies['loggedIn']
    console.log(loggedInCookie)

    // Using the ID , find the user record
    // Then locate the password 
    // loggedIncookie must be equal to sha256(password)

    const callback = (err,result) => {
      
      if(loggedInCookie == sha256(result[0].password)){
        response.send("success")
      } else {
        response.send("fail")
      }
    }

    db.pokemon.userVerification(callback,id)


  }


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    displayLogin: displayLogin,
    submitLogin: submitLogin,
    userPage: userPage
  };

}
