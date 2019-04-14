const sha256 = require('js-sha256');

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

    let login = (request, response) => {

        response.render('main/login');

    };

    let loginDone = (request, response) => {

        const data = {
            name: request.body.name,
            password: sha256(request.body.password)
        }

        console.log(data);

        const doneWithQuery = (data) => {
            console.log(data);
            // response.send("ok ur logged in");
        }

      db.login.login(data, doneWithQuery, ((error, res) => {
            response.send("ok ur logged in");
      }));
    }





  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: login,
    done: loginDone,

  };

}