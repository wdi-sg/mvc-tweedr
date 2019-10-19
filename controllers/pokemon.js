module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let loginControllerCallback = (request, response) => {
      response.render('login')
  };

  let verifyControllerCallback = (request,response)=>{
    let user = request.body.username
    let password = request.body.password
    // let hashedPw = sha256(request.body.password)
    console.log(user, password)

    db.pokemon.verifyUser(user,(foundUser)=>{
        response.send({foundUser})
    });

  }
  //  let indexControllerCallback = (request, response) => {
  //     db.pokemon.getAll((error, allPokemon) => {
  //       response.render('pokemon/index', { allPokemon });
  //     });

  // };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    login: loginControllerCallback,
    verify: verifyControllerCallback
  };

}