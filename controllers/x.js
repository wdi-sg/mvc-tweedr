
// ------------------ WHAT DOES controllers/x.js DO? ------------------
// 0 - Gets called by routes.js. Takes in db.js
// 1 - Declaring functions that decides the appropriate response. (Render/redirect/send). If jsx file is rendered, call jsx files.
// 2 - Stores your function as an object (to be used later)
// 3 - Returns responses functions as object to be executed when URL is entered

module.exports = (db) => {
    // let whateverCC = whateverControllerCallback (Acronym)
    /* ===================================================
     * =========       1. CONTROLLER          ============
    =================================================== */

    // db === (db.js)
    //.x (tl;dr: results.rows) === xModelsObject (db.js) = allxModelsFunction(pool) (db.js) === ./models/x.js file === list of functions of query === results.rows
    // getAll === pool.query("SELECT * FROM x")
    // { allResult } = results.rows
    // 'x/index.jsx' = views/x/index.jsx file
    // { allResult } === const data = {allResult: allResult}

    let indexCC = (request, response) => {
        db.x.getAll((error, allResult) => {
            response.render('x/index.jsx', { allResult });
        });
    };

    let nameCC = (request, response) => {
        db.x.getName((error, allResult) => {
            response.render('x/name.jsx', { allResult });
        });
    };

    /* ===================================================
     * =====          2. RETURN FUNCTION          ========
    =================================================== */
    return {
        index: indexCC,
        name: nameCC,
    };

}