module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
  
    let loginControllerCallbacks = (request, response) => {
          response.render('login');
        
    };
  
    let verifyUserControllerCallbacks = (request, response) => {
        console.log("LOGGGINGGGG IN MEGAN!")
        console.log("this is the request!!!!!" , request.body)
        const data = [
            request.body.email
        ];


        const callback = (error, queryResult) => {
            //form uses request.body
            let passwordFromUser = request.body.password;
            //databse uses queryResult for this case
            let passwordFromDatabase = queryResult[0].password;
            console.log('hahahahahahaha', passwordFromUser)
            console.log('heheheheheheeheheh', passwordFromDatabase)

            if (passwordFromUser === passwordFromDatabase) {
                response.send("YAYAYAYAYAYA ITS CORRECT")
            } else {
                response.send("NOOOOOO ITS WRONG!")
            }

            // response.send("registered new userrrrrrrrr")
            // response.render('pokemon/index',  { allPokemon });
          }

        db.loginUser.loginAll(data, callback);
    };
  
    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
      login: loginControllerCallbacks,
      userinfo: verifyUserControllerCallbacks
    //   index: registerControllerCallback,
    //   registeruser: registerUserControllerCallback
    };
  
  }
  