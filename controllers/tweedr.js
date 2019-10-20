module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let getLoginControllerCallback = (request, response) => {

        response.render('tweedr/login');
    };

    let postLoginControllerCallback = (request, response) => {

        // Get request body values
        let inputUsername = request.body.username;
        console.log("In controller, inputUsername: " + inputUsername);

        const inputValues = [inputUsername];
        console.log("In controller, inputValues: " + inputValues);

        // Check if user exists in db
        db.tweedr.getUser(inputValues, (error, checkIfUserExists) => {

            if (error) {

                response.send("Error getting user");

            } else {

                console.log("No error querying for user, proceed to check if user exists ...");

                console.log("In controllers, checkIfUserExists is the query result from model: ", checkIfUserExists);

                if (checkIfUserExists.length > 0) {

                    response.send("User " + inputUsername + " exists!");

                } else {
                    response.send("User is not found!");
                }
            }
        });
    };


    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        getLogin: getLoginControllerCallback,
        postLogin: postLoginControllerCallback
    };

}