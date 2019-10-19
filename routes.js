
// ------------------ WHAT DOES routes.js DO? ------------------
// 0 - Gets called by index.js. Takes in allModels (The object with ALL functions of Query that will obtain results.rows)
// 1 - Declaring requirement for controller and allModels.
// 2 - Decide which URL will call which Controller Callbacks.


module.exports = (app, allModels) => {
    // const xCC = xControllerCallback (Acronym)
    /* ===================================================
     * =========         1. CONSTANT          ============
    =================================================== */
    const xCC = require('./controllers/x.js')(allModels);

    /* ===================================================
     * ===========       2. ROUTES          ==============
    =================================================== */
    app.get('/', xCC.loginPage);
    app.get('/home/:id', xCC.homePage);
    app.get('/user/:id',xCC.userPage);
    // app.get('/pokemons', xCC.index);
    // app.get('/students', xCC.students)
};