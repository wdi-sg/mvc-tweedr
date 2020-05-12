const sha256 = require('js-sha256');
const SALT = "KILLMEPLEASE";   


module.exports = (db) => { 
  
  
   // Controller logic
  const homePage= (request, response) => {
      db.home.getAll((error, allUsers) => {
        response.render('home', { allUsers });
      });
  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */

  const getRegister = (request,response) => {
    db.home.getAll((error,allUsers) =>{
      response.render('register',{allUsers});
    });
  };
  

const register= (request,response) => {
  const newUser = request.body;
  const password = sha256(request.body.password + SALT);
  const account ={newUser, password};
  db.home.afterRegister(account,(error,user) =>{
    if (error) {
      console.log("errr",error);
    } else if (user === "taken"){
      response.status(403).send("username has been registered before.Please use another username!")
    } else {
      let hashedCookie = sha256(user.id + "logged_id" + SALT);
      response.cookie("user_id", user.id);
      response.cookie("hasLoggedIn,hashedCookie");

      let data = {
        user:user
      } 
      response.send("welcome");
    }
  })
}


// const getLogin = (request, response) => {
//   db.home.getAll((error, allUsers) => {
//     response.render("login", {allUsers});
//   });
// };

// const login = (request, response) => {
//   const {name, password} = request.body;
//   db.home.afterLogin(name, (error, result) => {
//     if (error) {
//       response.send("Query error");
//     } else {
//       if (result) {
//         const hashedRequestPassword = sha256( password + SALT );
//         if (hashedRequestPassword === result[0].password) {
//           const user_id = result[0].id;
//           const hashedCookie = sha256(SALT + user_id);
//           response.cookie("user_id", user_id);
//           response.cookie("hasLoggedIn", hashedCookie);
//           response.redirect("/users");
//         } else {
//           response.status(403).send("wrong password");
//         }
//       } else {
//         response.status(403).send("no username");
//       }
//     }
//   });
// };


// Export controller functions as a module
return {
  home: 
  homePage,
  getRegister,
  register,
  // getLogin,
  // login,
};
};










