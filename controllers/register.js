module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
  
    let registerControllerCallback = (request, response) => {
          response.render('register');
        
    };
  
    let registerUserControllerCallback = (request, response) => {
        console.log("this is the request!!!!!" , request.body)
        const data = [
            request.body.name,
            request.body.email,
            request.body.password
        ];


        const callback = (error, allPokemon) => {
            response.send("registered new userrrrrrrrr")
            // response.render('pokemon/index',  { allPokemon });
          }

        db.registerUser.registerAll(data, callback);
    };
  
    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
      index: registerControllerCallback,
      registeruser: registerUserControllerCallback
    };
  
  }
  