module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let indexControllerCallback = (request, response) => {
        db.pokemon.getAll("users", (error, allUsers) => {
            response.render('tweedr/home', {allUsers});
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