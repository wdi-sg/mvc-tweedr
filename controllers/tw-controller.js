module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

    let index = (request, response) => {
        response.render('index');
    };

    let login = (request, response) => {
        response.render('login');
    };

    let register = (request, response) => {
      response.render('register');
    };

    let home = (request, response) => {
        db.tweedr.getAllUsers((error, allUsers) => {
            if (error) {
                console.log("error in getting file", error);
            } else {
                let dataSet = {
                    users : allUsers
                }
                response.render('home', dataSet);
            }
        });
    };

    let createUser = (request, response) => {

        let newUser = request.body;
        db.tweedr.createUser(newUser, (error, user) => {
            if (error) {
                console.log("error in getting file", error);

            } else {
                let dataSet = {
                    user : user
                }
                response.render('welcome', dataSet);
            }

            // if (user.rowCount >= 1) {
            //     console.log('User created successfully');


            // } else {
            //     response.send('User could not be created');
            // }
        });
    };

    let redirect = (request, response) => {
      response.redirect('index');
    };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index,
    login,
    register,
    createUser,
    home,
    redirect,

  };

}