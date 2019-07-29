//USER login, create, logout.

const helper = require('../helper');
const sha256 = require('js-sha256');


module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

     let loginRequestHandler = async function(request, response) {
       try {
           if (helper.checkCookiesForLogin(request.cookies) === false){
               response.render('user/login');
           } else {
               response.redirect('/');
           }
       } catch (e) {
             console.log('user controller ' + e);
       }
     };

    let authenticateRequestHandler = async function(request, responsee) {
      try {

      } catch (e) {

      } finally {

      }
    };

    let createAccountRequestHandler = async function(request, response) {
      try {

      } catch (e) {

      } finally {

      }
    };

    let registerREquestHandler = async function(request, response)  {
      try {

      } catch (e) {

      } finally {

      }
    };

    let logoutRequestHandler = async function(request, response)  {
      try {

      } catch (e) {

      } finally {

      }
    };

  //
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
    loginRequestHandler,
    authenticateRequestHandler,
    createAccountRequestHandler,
    registerREquestHandler,
    logoutRequestHandler
  };
}
