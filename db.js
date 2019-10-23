
// ------------------ WHAT DOES db.js DO? ------------------
// 0 - Gets called by index.js
// 1 - Set configurations for dependencies AND user/database.
// 2 - Link to models/x.js and return function result.rows. (Models = Query functions [Example: SELECT * FROM table]) It is the function, not the data!
// 3 - Stores functions result.rows and export it as an object.
// 4 - Return exported objects (function result.rows) back to index.js


/* ===================================================
 * ======          1. CONFIGURATION          =========
=================================================== */
const pg = require('pg');
const url = require('url');
var configs;
if (process.env.DATABASE_URL) {
    const params = url.parse(process.env.DATABASE_URL);
    const auth = params.auth.split(':');
    configs = {
        user: auth[0],
        password: auth[1],
        host: params.hostname,
        port: params.port,
        database: params.pathname.split('/')[1],
        ssl: true
    };
} else {
    configs = {
        user: 'eden',
        host: '127.0.0.1',
        database: 'tweedr',
        port: 5432
    };
}

const pool = new pg.Pool(configs);
pool.on('error', function(err) {
    console.log('idle client error', err.message, err.stack);
});


/* ===================================================
 * ======         2. /MODELS/x.JS            =========
=================================================== */

// Models (functions) refers to modules that send query to Postgres, and Receive table as return.
// const allyModelsFunction = require('./models/y.js');
// const yModelsObject = allyModelsFunction(pool);
const allxModelsFunction = require('./models/x.js');
const xModelsObject = allxModelsFunction(pool);


/* ===================================================
 * ======       3. MODULE EXPORTS            =========
=================================================== */

module.exports = {
    //make queries directly from here AND get a reference to end the connection pool at server end
    queryInterface: (text, params, callback) => {
        return pool.query(text, params, callback);
    },
    pool: pool,

    /*---4. ADD APP MODELS HERE ---*/
    // y: yModelsObject,
    x: xModelsObject
};