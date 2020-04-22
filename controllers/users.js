module.exports = (db) => {

  // let indexControllerCallback = (request, response) => {
  //     db.pokemon.getAll((error, allPokemon) => {
  //       response.render('pokemon/index', { allPokemon });
  //     });
  // };
  let displayLoginPage = (request, response) => {
    response.render("./auth/login");
  }

  let displayRegistration = (request, response) => {
    response.render("./auth/register");
  }
  
  let submitRegistration = (request, response) => {
    console.log(request.body);
  }

  return {
    displayLoginPage: displayLoginPage,
    displayRegistration: displayRegistration,
    submitRegistration: submitRegistration
  };

}
