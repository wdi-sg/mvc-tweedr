/* ===================================================
 * ======             CONFIGURATION          =========
 * =================================================*/
const pg = require('pg');
const url = require('url');

let configs;

if( process.env.DATABASE_URL ) {
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
        user: 'chuasweechin',
        host: '127.0.0.1',
        database: 'tweedr',
        port: 5432
    };
}

const pool = new pg.Pool(configs);

pool.on('error', function (err) {
    console.log('idle client error', err.message, err.stack);
});

 /* ===================================================
 * ======         REQUIRE MODEL FILES          ========
 * ==================================================*/
const tweetModelsFunction = require('./models/tweet');
const tweetModelsObject = tweetModelsFunction(pool);

const userModelsFunction = require('./models/user');
const userModelsObject = userModelsFunction(pool);

/* ===================================================
 * ======             MODULE EXPORTS          ========
 * =================================================*/
module.exports = {
  //make queries directly from here
    queryInterface: function (text, params, callback) {
        return pool.query(text, params, callback);
    },
    pool: pool,
    tweets: tweetModelsObject,
    users: userModelsObject
};