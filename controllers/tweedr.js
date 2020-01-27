module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let registerUsers = (request, response) => {
        const values = request.body;
        const whenLoad = (err, values) => {
            console.log("send reg info yo")
            response.render('./register');
        }
        db.tweedr.getUsers(whenLoad);
    };

    let registerUsersPost = (request, response) => {
        const values = request.body;
        const whenLoad = (err, values) => {
            console.log("send reg info yo")
            response.send("Register form here", values);
        }
        db.tweedr.getUsers(whenLoad);
    }
  
    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
    //   index: indexControllerCallback,
    //   students: studentsControllerCallback,
      register: registerUsers,
      registerPost: registerUsersPost
    };
  
  }
  