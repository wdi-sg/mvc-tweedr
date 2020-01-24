module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let indexControllerCallback = (request, response) => {
        db.main.getAll("users", (error, allUsers) => {
            response.render('tweedr/home', {allUsers});
        });
    };

    let test1 = (request, response) => {
        db.main.getAll("tweeds", (error, allTweeds) => {
            response.render('tweedr/home', {allTweeds});
        });
    };

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        index: indexControllerCallback,
        test1
    };

}