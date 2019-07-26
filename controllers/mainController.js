module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let indexControllerCallback = (request, response) => {
        db.queryMod.getAll((error, allResults) => {
            console.log( allResults );
            response.render('main/index', {
                allResults
            });
        });
    };


    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        index: indexControllerCallback,
    };

}
