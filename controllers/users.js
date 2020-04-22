module.exports = (db) => {

  //Controller logic


  /*let indexControllerCallback = (request, response) => {

      db.pokemon.getAll((error, allPokemon) => {
        response.render('pokemon/index', { allPokemon });
      });
  };*/
  let registerUser = (request,response)=>{
    response.render('users/registeruser');
  };

  const registerAccount = (request, response) => {
     const name = request.body.name;
     const password = request.body.password;
     const callbackFunction = (err, result) => {
        if (err) {
            console.log('error!', err);
            response.send("error");
        } else {
            response.send('successfully registered account.');
            //response.render('message', { message: 'successfully registered account.' });
        }
     }

    db.users.registerAccount(name, password, callbackFunction);
};

const loginPage = (request, response) => {
       response.render('users/loginpage');
   };
// Export controller functions as a module
const loginUser = (request, response) => {
     let name = request.body.name;
     let password = request.body.password;

     const callbackFunction = (err, result) => {
       console.log('did the callback');

            response.send("successfully logged into account");


     }

     db.users.loginUser(name, password, callbackFunction);
   }

  return {
    //index: indexControllerCallback,
    registerUser:registerUser,
    registerAccount:registerAccount,
    loginPage:loginPage,
    loginUser:loginUser
  };

}