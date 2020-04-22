module.exports = (db) => {
const sha256 = require('js-sha256');
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */


 let registrationCallback = (req, res) => {
    res.render('register');
  }

  let registerUser = (req, res) => {
    console.log(req.body);
    console.log("####### Input #######");
    db.register.register(req.body, (error, info) => {
        console.log(info);
        res.redirect(302, '/');
    })
  }
  // let indexControllerCallback = (request, response) => {
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
    // index: indexControllerCallback,
    register: registrationCallback,
    registerUser: registerUser

  };

}