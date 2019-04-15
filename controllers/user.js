module.exports = (allModels) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

//   let indexControllerCallback = (request, response) => {
//       db.pokemon.getAll((error, allPokemon) => {
//         response.render('pokemon/index', { allPokemon });
//       });
//   };


//   *
//    * ===========================================
//    * Export controller functions as a module
//    * ===========================================

//   return {
//     index: indexControllerCallback,
//   };

// }



module.exports = (allModels) => {

  let regForm = (request, response) => {
    response.render("user/register");
  };

  let regPost = (request, response) => {
    console.log( request.body );

    const data = {
      name: request.body.name,
      email: request.body.email,
      password: request.body.password
    };

    const doneWithQuery = (createdUser) => {
      console.log("register complete");
      response.send("Your new user id is: "+createdUser.id);
    };

    allModels.users.register(data, doneWithQuery);
  };


  return {
    registerForm : regForm,
    registerPost : regPost
  };

}