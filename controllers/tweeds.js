module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    // let indexControllerCallback = (request, response) => {
    //     db.pokemon.getAll((error, allPokemon) => {
    //         response.render('pokemon/index', { allPokemon });
    //     });
    // };

    let homeControllerCallback = (request, response) => {

        db.tweeds.getAll((error, allTweeds) => {
            response.render('tweeds/index', { allTweeds });
        });
    };


    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        home: homeControllerCallback,
    };

}
