
// ------------------ WHAT DOES models/x.js DO? ------------------
// 0 - Gets called by db.js
// 1 - Write your functions for selecting the appropriate data
// 2 - Stores your function as an object (to be used later)
// 3 - Export it back to db.js



/* ===================================================
 * =========         3. Export            ============
=================================================== */

module.exports = (dbPoolInstance) => {

    /* ===================================================
     * ========         1. FUNCTION            ===========
    =================================================== */
    //Declare your function here. You really only need to customize the query.
    let getAll = (callback) => {
        let query = 'SELECT * FROM x';
        dbPoolInstance.query(query, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    };

    let getName = (callback) => {
        let query = 'SELECT name FROM x';
        dbPoolInstance.query(query, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    };

    /* ===================================================
     * =====          2. RETURN FUNCTION          ========
    =================================================== */
    //List of functions available
    return {
        getAll,
        getName,
    };
};