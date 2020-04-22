module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */
const sha256 = require('js-sha256');

  let registerControllerCallback = (request, response) => {
    //response.send("hello register");
    response.render("./forms/register");

  };

let processRegister = (request, response)=>{
    //response.send(request.body);
    //console.log(request.body);
         db.register.register(request.body,(error, registerDetail) => {
            //console.log( registerDetail);
            response.redirect("/login");
        //const data = {}
        //data.tweets=tweets;

      });
};

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    register: registerControllerCallback ,
    processRegister: processRegister,
  };

}