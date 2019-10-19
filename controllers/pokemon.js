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
        if (foundUser === null){
            response.send('No such person')
        } else {

            if (foundUser.username === user && foundUser.password === password){
                response.send('Logged in!')
            } else {
                response.send('Login failed. Try again.')
            }

        }
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